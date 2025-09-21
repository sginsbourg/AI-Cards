const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });
app.use(express.json());
app.use(express.static('public'));
// ---------- tiny in-memory state ----------
let workspace = { cards: [], wires: [] };   // can be persisted to disk
const cardTemplates = [];                  // read from cards/*.json
fs.readdirSync('cards').filter(f => f.endsWith('.json'))
  .forEach(f => cardTemplates.push(JSON.parse(fs.readFileSync(path.join('cards', f), 'utf8'))));
// ---------- REST: templates ----------
app.get('/api/templates', (q, r) => r.json(cardTemplates));
// ---------- REST: workspace ----------
app.get('/api/workspace', (q, r) => r.json(workspace));
app.post('/api/workspace', (q, r) => { workspace = q.body; r.sendStatus(200); });
// ---------- Socket.IO real-time ----------
io.on('connection', sock => {
sock.on('run', async msg => {
const card = workspace.cards.find(c => c.instanceId === msg.instanceId);
if (!card) return;
const tpl = cardTemplates.find(t => t.id === card.templateId);
const payload = { ...msg.payload, ...card.lastOutput }; // full input scope
const out = await execCard(tpl, payload);
card.lastOutput = out;
io.emit('output', { instanceId: msg.instanceId, output: out });
});
});
// ---------- card runner ----------
function execCard(tpl, payload) {
return new Promise(res => {
const stdio = ['pipe', 'pipe', 'pipe'];
const type = tpl.exec.type;
const file = path.resolve('cards', tpl.exec.file);
let cmd, args;
if (type === 'node') { cmd = 'node'; args = [file]; }
else if (type === 'python') { cmd = process.platform === 'win32' ? 'python' : 'python3'; args = [file]; }
else { cmd = 'sh'; args = [file]; }   // shell
const child = spawn(cmd, args, { stdio });
let out = '', err = '';
child.stdout.on('data', d => out += d);
child.stderr.on('data', d => err += d);
child.on('close', code => {
try { res(JSON.parse(out)); }
catch { res({ error: err || out }); }
});
child.stdin.write(JSON.stringify(payload));
child.stdin.end();
});
}
server.listen(3000, () => console.log('AI-Cards on http://localhost:3000'));