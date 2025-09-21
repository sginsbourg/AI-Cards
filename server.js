#!/usr/bin/env node
/*  AI-Cards  –  production-grade server  –  MIT  */
const express = require('express');
const http    = require('http');
const socketIo= require('socket.io');
const { v4: uuid } = require('uuid');
const fs      = require('fs');
const path    = require('path');
const { spawn } = require('child_process');
const EventEmitter = require('events');

/* ---------- 0.  CONFIG  ---------- */
const CFG = {
  retryMax: 3,
  retryDelayBase: 1000,
  retryMultiplier: 2,
  haltOnError: false,
  logFile: 'logs/error.log',
  maxLogMB: 10,
  defaultTimeout: 30000
};

/* ---------- 1.  LOGGER  ---------- */
if (!fs.existsSync('logs')) fs.mkdirSync('logs');
const logStream = fs.createWriteStream(CFG.logFile, { flags: 'a' });
function logError(obj) {
  const line = JSON.stringify({ ...obj, ts: new Date().toISOString() }) + '\n';
  logStream.write(line);
  console[obj.level](`[${obj.level.toUpperCase()}] ${obj.message} (${obj.instanceId || 'core'})`);
}

/* ---------- 2.  ERROR BUS  ---------- */
const ee = new EventEmitter();
ee.on('error', ({ raw, ctx }) => {
  const msg = raw.message || raw.toString();
  const info = classifyError(msg);
  const payload = {
    level: info.recoverable ? 'warn' : 'error',
    type: info.type,
    message: msg,
    instanceId: ctx.instanceId,
    templateId: ctx.templateId,
    retry: ctx.retry,
    recoverable: info.recoverable,
    haltOnError: ctx.haltOnError != null ? ctx.haltOnError : CFG.haltOnError
  };
  logError(payload);
  io.emit('error', payload);
  if (!info.recoverable && payload.haltOnError) {
    io.emit('pipeline-halted', { instanceId: ctx.instanceId, reason: payload.type });
  }
});

function classifyError(msg) {
  if (/not found|command not found/i.test(msg)) return { type: 'MISSING_BINARY', recoverable: true };
  if (/timeout|timed out/i.test(msg))          return { type: 'TIMEOUT', recoverable: true };
  if (/SyntaxError|ParseError/i.test(msg))     return { type: 'SYNTAX', recoverable: false };
  if (/ECONNREFUSED|ECONNRESET/i.test(msg))    return { type: 'CONN_ERROR', recoverable: true };
  return { type: 'RUNTIME', recoverable: true };
}

/* ---------- 3.  APP SETUP  ---------- */
const app  = express();
const server = http.createServer(app);
const io   = socketIo(server, { cors: { origin: '*' } });

app.use(express.json());
app.use(express.static('public'));
app.use('/README.md', express.static(path.join(__dirname, 'README.md')));

/* ---------- 4.  STATE  ---------- */
let workspace = { cards: [], wires: [] };
const cardTemplates = [];

fs.readdirSync('cards')
  .filter(f => f.endsWith('.json'))
  .forEach(f => cardTemplates.push(JSON.parse(fs.readFileSync(path.join('cards', f), 'utf8'))));

/* ---------- 5.  ROUTES  ---------- */
app.get('/api/templates', (q, r) => r.json(cardTemplates));
app.get('/api/workspace', (q, r) => r.json(workspace));
app.post('/api/workspace', (q, r) => { workspace = q.body; r.sendStatus(200); });
app.get('/api/errors', (q, r) => {
  if (!fs.existsSync(CFG.logFile)) return r.json([]);
  const rows = fs.readFileSync(CFG.logFile, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
  r.json(rows);
});

/* ---------- 6.  CARD RUNNER WITH RETRY / TIMEOUT  ---------- */
async function execCard(tpl, payload, timeoutMs = CFG.defaultTimeout) {
  return new Promise((resolve, reject) => {
    const type = tpl.exec.type;
    const file = path.resolve('cards', tpl.exec.file);
    let cmd, args;
    if (type === 'node') cmd = 'node', args = [file];
    else if (type === 'python') cmd = process.platform === 'win32' ? 'python' : 'python3', args = [file];
    else cmd = 'sh', args = [file];

    const child = spawn(cmd, args, { env: { ...process.env, ...tpl.env } });
    let stdout = '', stderr = '';
    const timer = setTimeout(() => {
      child.kill('SIGTERM');
      reject(Object.assign(new Error('Card timeout'), { code: 'ETIMEDOUT' }));
    }, timeoutMs);

    child.stdout.on('data', d => stdout += d);
    child.stderr.on('data', d => stderr += d);
    child.on('error', e => reject(e));
    child.on('close', code => {
      clearTimeout(timer);
      if (code !== 0) return reject(new Error(stderr || `Exit ${code}`));
      try { resolve(JSON.parse(stdout)); }
      catch { reject(new Error('Invalid JSON stdout')); }
    });
    child.stdin.write(JSON.stringify(payload));
    child.stdin.end();
  });
}

async function execCardWithRetry(tpl, payload, ctx) {
  ctx.retry = 0;
  while (ctx.retry <= CFG.retryMax) {
    try {
      const out = await execCard(tpl, payload, tpl.timeout || CFG.defaultTimeout);
      return out;
    } catch (raw) {
      ctx.retry++;
      ee.emit('error', { raw, ctx });
      if (!classifyError(raw.message || raw).recoverable || ctx.retry > CFG.retryMax) throw raw;
      await new Promise(r => setTimeout(r, CFG.retryDelayBase * Math.pow(CFG.retryMultiplier, ctx.retry - 1)));
    }
  }
}

/* ---------- 7.  SOCKET.IO  ---------- */
io.on('connection', sock => {
  sock.on('run', async msg => {
    const card = workspace.cards.find(c => c.instanceId === msg.instanceId);
    if (!card) return;
    const tpl = cardTemplates.find(t => t.id === card.templateId);
    const ctx = {
      instanceId: card.instanceId,
      templateId: tpl.id,
      haltOnError: tpl.haltOnError
    };
    try {
      const out = await execCardWithRetry(tpl, { ...msg.payload, ...card.lastOutput }, ctx);
      card.lastOutput = out;
      io.emit('output', { instanceId: msg.instanceId, output: out });
    } catch (final) {
      const fallback = tpl.fallbackOutput || { error: 'Max retries exceeded', ok: false };
      card.lastOutput = fallback;
      io.emit('output', { instanceId: msg.instanceId, output: fallback });
    }
  });
});

/* ---------- 8.  START  ---------- */
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`AI-Cards ready → http://localhost:${PORT}`));

app.delete('/api/errors', (q, r) => {
  fs.writeFileSync(CFG.logFile, '');   // truncate
  r.sendStatus(204);
});