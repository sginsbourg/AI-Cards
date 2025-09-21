/*********************************************************************
 *  AI-Cards  –  Flow Canvas  –  Vanilla JS  –  MIT
 *********************************************************************/
const socket = io();
let templates = [];
let workspace = { cards: [], wires: [] };
let selectedCard = null;
let lines = [];                 // Leader-Line instances
let undoStack = [];
let redoStack = [];
const GRID = 20;                // snap grid
const AUTO_SAVE_MS = 3000;

/* ---------- 1.  DOM HELPERS ---------- */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => p.querySelectorAll(s);

/* ---------- 2.  INITIAL LOAD ---------- */
(async () => {
  templates = await (await fetch('/api/templates')).json();
  workspace = await (await fetch('/api/workspace')).json();

  /* ----- ensure at least one starter card ----- */
  if (workspace.cards.length === 0) {
    const starter = templates.find(t => t.id === 'hello-js') || templates[0];
    if (starter) {
      workspace.cards.push({
        instanceId: uuid(),
        templateId: starter.id,
        x: 100, y: 100,
        lastOutput: {}
      });
    }
  }

  buildUI();                 // creates DOM
  wireUIEvents();            // attaches listeners (ADD button here)
  workspace.cards.forEach(drawCard);
  workspace.wires.forEach(drawWire);
  registerUndoHooks();
  setInterval(saveWorkspace, AUTO_SAVE_MS);
})();

/* ---------- 3.  BUILD FULL UI ---------- */
function buildUI() {
  document.body.innerHTML = `
  <header class="top-bar">
    <div class="brand"><span class="logo">🤖</span> AI-Cards</div>
    <nav class="shortcuts">
      <div style="position:relative;">
        <button id="addBtn" title="Add Card (A)">＋ Add</button>
        <div id="addMenu" class="add-menu"></div>
      </div>
      <button id="undoBtn" title="Undo (Ctrl-Z)">↶ Undo</button>
      <button id="redoBtn" title="Redo (Ctrl-Y)">↷ Redo</button>
      <button id="saveBtn" title="Save Now (Ctrl-S)">💾 Save</button>
      <button id="zoomFitBtn" title="Fit to screen">🔍 Fit</button>
      <button id="readmeBtn" title="View README">📖 README</button>
    </nav>
    <div class="spacer"></div>
    <div class="zoom-controls">
      <button id="zoomOut">－</button>
      <span id="zoomLevel">100%</span>
      <button id="zoomIn">＋</button>
    </div>
  </header>

  <div class="main-layout">
    <!-- ~~~~~~ LEFT PANEL ~~~~~~ -->
    <aside class="left-panel">
      <input id="componentSearch" placeholder="Search components…" autocomplete="off">
      <div id="componentList" class="component-list" style="display:flex"></div>
      <div class="panel-footer">
        <small>Drag → canvas<br>Hold W + click to wire</small>
      </div>
    </aside>

    <!-- ~~~~~~ CANVAS AREA ~~~~~~ -->
    <section class="canvas-wrapper">
      <div id="canvas" class="canvas"></div>
      <div id="minimap" class="minimap"></div>
    </section>
  </div>

  <!-- ~~~~~~ TOAST CONTAINER ~~~~~~ -->
  <div id="toastContainer"></div>
  `;
  populateComponentPanel();
  populateAddMenu();         // ← fill drop-down
  injectCSS();               // ← styles for menu
}

/* ---------- 4.  INJECT CSS (menu + rest) ---------- */
function injectCSS() {
  if ($('style[title="flow-css"]')) return;
  const style = document.createElement('style');
  style.title = 'flow-css';
  style.textContent = `
  :root {
    --bg: #0d1117;
    --surface: #161b22;
    --border: #30363d;
    --text: #eee;
    --subtle: #888;
    --accent: #0a84ff;
    --ok: #22c55e;
    --warn: #f59e0b;
    --error: #ef4444;
    --grid: #2a2a2a;
  }
  body { margin: 0; font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); overflow: hidden; }
  .top-bar { display: flex; align-items: center; padding: 0.5rem 1rem; background: var(--surface); border-bottom: 1px solid var(--border); gap: 0.5rem; user-select: none; }
  .brand { display: flex; align-items: center; gap: 0.4rem; font-weight: 600; font-size: 1.1rem; }
  .logo { font-size: 1.4rem; }
  .shortcuts button, .zoom-controls button { padding: 0.4rem 0.7rem; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 4px; cursor: pointer; }
  .shortcuts button:hover, .zoom-controls button:hover { border-color: var(--accent); }
  .spacer { flex: 1; }
  .zoom-controls { display: flex; align-items: center; gap: 0.4rem; }
  #zoomLevel { min-width: 48px; text-align: center; font-size: 0.8rem; }

  /* ADD drop-down menu */
  .add-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    max-height: 300px;
    overflow-y: auto;
    display: none;
    flex-direction: column;
    min-width: 200px;
    z-index: 1000;
  }
  .add-menu-item {
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .add-menu-item:hover {
    background: #ffffff18;
  }

  .main-layout { display: flex; flex: 1; height: 0; }
  .left-panel { width: 260px; background: var(--surface); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 0.75rem; gap: 0.5rem; }
  #componentSearch { padding: 0.5rem; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 4px; }
  .component-list { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 0.4rem; }
  .comp-item { padding: 0.5rem; border: 1px solid var(--border); border-radius: 4px; background: var(--bg); cursor: grab; display: flex; align-items: center; gap: 0.5rem; }
  .comp-item:hover { border-color: var(--accent); }
  .comp-item:active { cursor: grabbing; }
  .comp-icon { font-size: 1.3rem; }
  .panel-footer { font-size: 0.7rem; color: var(--subtle); text-align: center; }

  .canvas-wrapper { flex: 1; position: relative; overflow: hidden; background: var(--bg); background-image: radial-gradient(circle, var(--grid) 1px, transparent 1px); background-size: 20px 20px; }
  .canvas { position: absolute; inset: 0; transform-origin: 0 0; }
  .card { position: absolute; width: 200px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem; display: flex; flex-direction: column; gap: 0.4rem; cursor: move; user-select: none; }
  .card.selected { border-color: var(--accent); box-shadow: 0 0 0 2px var(--accent); }
  .card-title { font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; }
  .card-body { font-size: 0.8rem; color: var(--subtle); }
  .card textarea, .card pre { width: 100%; font-size: 0.75rem; font-family: ui-monospace, monospace; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 4px; padding: 0.3rem; resize: vertical; }
  .card pre { max-height: 100px; overflow: auto; }
  .card button.run { align-self: flex-end; padding: 0.3rem 0.6rem; border: none; background: var(--accent); color: #fff; border-radius: 4px; cursor: pointer; font-size: 0.75rem; }
  .card button.run:hover { filter: brightness(1.15); }

  #minimap { position: absolute; bottom: 1rem; right: 1rem; width: 160px; height: 100px; background: var(--surface); border: 1px solid var(--border); border-radius: 4px; opacity: 0.7; cursor: pointer; }
  #toastContainer { position: fixed; bottom: 1rem; right: 1rem; display: flex; flex-direction: column; gap: 0.5rem; z-index: 999; }
  .toast { padding: 0.6rem 1rem; border-radius: 4px; color: #fff; font-size: 0.8rem; animation: slide 0.3s ease; }
  .toast.warn  { background: var(--warn);  color: #000; }
  .toast.error { background: var(--error); color: #fff; }
  @keyframes slide { from { transform: translateX(100%); } to { transform: translateX(0); } }
  `;
  document.head.appendChild(style);
}

/* ---------- 5.  POPULATE LEFT PANEL (drag source) ---------- */
function populateComponentPanel() {
  const list = $('#componentList');
  const search = $('#componentSearch');
  function draw() {
    const q = search.value.toLowerCase();
    list.innerHTML = '';
    templates
      .filter(t => t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q))
      .forEach(t => {
        const div = document.createElement('div');
        div.className = 'comp-item';
        div.draggable = true;
        div.dataset.templateId = t.id;
        div.innerHTML = `<span class="comp-icon">${t.icon}</span><span>${t.name}</span>`;
        div.ondragstart = e => e.dataTransfer.setData('template/id', t.id);
        list.appendChild(div);
      });
  }
  search.oninput = draw;
  draw();
}

/* ---------- 6.  POPULATE ADD DROP-DOWN MENU ---------- */
function populateAddMenu() {
  const menu = $('#addMenu');
  menu.innerHTML = '';                       // rebuild
  templates.forEach(t => {
    const item = document.createElement('div');
    item.className = 'add-menu-item';
    item.innerHTML = `<span>${t.icon}</span><span>${t.name}</span>`;
    item.onclick = () => {
      menu.style.display = 'none';           // close
      addCard(t.id);                         // create card
    };
    menu.appendChild(item);
  });
}

/* ---------- 7.  WIRE UI EVENTS (AFTER DOM EXISTS) ---------- */
function wireUIEvents() {
  const canvas = $('#canvas');
  const wrapper = $('.canvas-wrapper');

  /* ADD button – drop-down menu */
  const addBtn = $('#addBtn');
  const addMenu = $('#addMenu');
  addBtn.onclick = () => {
    addMenu.style.display = addMenu.style.display === 'block' ? 'none' : 'block';
  };

  /* close menu if click outside */
  window.addEventListener('click', e => {
    if (!e.target.closest('#addBtn') && !e.target.closest('#addMenu')) {
      addMenu.style.display = 'none';
    }
  });

  /* README button */
  $('#readmeBtn').onclick = () => window.open('/README.md', '_blank');

  /* drag-drop from left panel */
  wrapper.ondragover = e => e.preventDefault();
  wrapper.ondrop = e => {
    e.preventDefault();
    const templateId = e.dataTransfer.getData('template/id');
    if (!templateId) return;
    const rect = wrapper.getBoundingClientRect();
    const x = snap((e.clientX - rect.left) / zoom);
    const y = snap((e.clientY - rect.top) / zoom);
    addCard(templateId, x, y);
  };

  /* zoom */
  $('#zoomIn').onclick  = () => setZoom(zoom * 1.2);
  $('#zoomOut').onclick = () => setZoom(zoom / 1.2);
  $('#zoomFitBtn').onclick = zoomFit;

  /* undo/redo */
  $('#undoBtn').onclick = undo;
  $('#redoBtn').onclick = redo;
  $('#saveBtn').onclick = () => { saveWorkspace(); toast('Saved', 'info'); };

  /* keyboard */
  window.onkeydown = e => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z') { e.preventDefault(); undo(); }
      if (e.key === 'y') { e.preventDefault(); redo(); }
      if (e.key === 's') { e.preventDefault(); saveWorkspace(); toast('Saved', 'info'); }
    }
    if (e.key.toLowerCase() === 'a') { e.preventDefault(); addBtn.click(); }
  };

  /* wheel zoom + pan */
  wrapper.onwheel = e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(zoom * delta);
  };
  let panning = false, panStart = {};
  wrapper.onmousedown = e => {
    if (e.shiftKey) { panning = true; panStart = { x: e.clientX - panX, y: e.clientY - panY }; wrapper.style.cursor = 'grabbing'; }
  };
  window.onmousemove = e => {
    if (!panning) return;
    panX = e.clientX - panStart.x;
    panY = e.clientY - panStart.y;
    updateCanvasTransform();
  };
  window.onmouseup = () => { panning = false; wrapper.style.cursor = 'grab'; };
  wrapper.style.cursor = 'grab';
}

/* ---------- 8.  CARD FACTORY ---------- */
function addCard(templateId, x, y) {
  const tpl = templates.find(t => t.id === templateId);
  const instance = {
    instanceId: uuid(),
    templateId,
    x: x || 100, y: y || 100,
    lastOutput: {}
  };
  workspace.cards.push(instance);
  drawCard(instance);
  pushUndo();
  saveWorkspace();
}

function drawCard(c) {
  const div = document.createElement('div');
  div.className = 'card';
  div.id = c.instanceId;
  div.style.left = c.x + 'px';
  div.style.top  = c.y + 'px';
  const tpl = templates.find(t => t.id === c.templateId);
  div.innerHTML = `
    <div class="card-title"><span>${tpl.icon}</span><span>${tpl.name}</span></div>
    <textarea class="inp" placeholder="input JSON">${JSON.stringify(c.lastInput || {}, null, 2)}</textarea>
    <pre class="out">${JSON.stringify(c.lastOutput, null, 2)}</pre>
    <button class="run">▶ run</button>
  `;
  div.querySelector('.run').onclick = () => runCard(c);
  makeDraggable(div, c);
  $('#canvas').appendChild(div);
}

/* ---------- 9.  DRAG + SNAP ---------- */
function makeDraggable(el, card) {
  let offX, offY;
  el.onmousedown = down => {
    selectedCard = card;
    $('.card.selected')?.classList.remove('selected');
    el.classList.add('selected');
    offX = down.clientX; offY = down.clientY;
    const startX = card.x, startY = card.y;
    document.onmousemove = mm => {
      card.x = startX + (mm.clientX - offX) / zoom;
      card.y = startY + (mm.clientY - offY) / zoom;
      card.x = snap(card.x); card.y = snap(card.y);
      el.style.left = card.x + 'px'; el.style.top = card.y + 'px';
      updateWires();
    };
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
      pushUndo();
      saveWorkspace();
    };
  };
}

function snap(v) { return Math.round(v / GRID) * GRID; }

/* ---------- 10.  WIRES ---------- */
let wireFrom = null, wiringMode = false;
window.addEventListener('keydown', e => { if (e.key.toLowerCase() === 'w') wiringMode = true; });
window.addEventListener('keyup', e => { if (e.key.toLowerCase() === 'w') wiringMode = false; });
window.addEventListener('click', e => {
  if (!wiringMode) return;
  const cardEl = e.target.closest('.card');
  if (!cardEl) return;
  if (!wireFrom) { wireFrom = cardEl.id; return; }
  if (wireFrom === cardEl.id) { wireFrom = null; return; }
  const w = { from: wireFrom, to: cardEl.id };
  workspace.wires.push(w);
  drawWire(w);
  wireFrom = null;
  pushUndo();
  saveWorkspace();
});

function drawWire(w) {
  const line = new LeaderLine(
    $('#' + w.from),
    $('#' + w.to),
    { color: 'steelblue', size: 2, endPlug: 'arrow3' }
  );
  lines.push(line);
}

function updateWires() {
  lines.forEach(l => l.position());
}

/* ---------- 11.  RUN CARD ---------- */
function runCard(card) {
  const tpl = templates.find(t => t.id === card.templateId);
  const inpEl = $(`#${card.instanceId} .inp`);
  let payload = {};
  try { payload = JSON.parse(inpEl.value); } catch {}
  socket.emit('run', { instanceId: card.instanceId, payload });
}

socket.on('output', msg => {
  const card = workspace.cards.find(c => c.instanceId === msg.instanceId);
  if (!card) return;
  card.lastOutput = msg.output;
  const pre = $(`#${msg.instanceId} .out`);
  if (pre) pre.textContent = JSON.stringify(msg.output, null, 2);
});

socket.on('error', err => {
  toast(`${err.type}: ${err.message.slice(0, 60)}${err.message.length > 60 ? '…' : ''}`, err.level);
});

/* ---------- 12.  ZOOM & PAN ---------- */
let zoom = 1, panX = 0, panY = 0;
function setZoom(z) {
  zoom = Math.max(0.3, Math.min(2, z));
  $('#zoomLevel').textContent = Math.round(zoom * 100) + '%';
  updateCanvasTransform();
}
function updateCanvasTransform() {
  $('#canvas').style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
  updateWires();
}
function zoomFit() {
  const cards = workspace.cards;
  if (!cards.length) return;
  const minX = Math.min(...cards.map(c => c.x)) - 50;
  const minY = Math.min(...cards.map(c => c.y)) - 50;
  const maxX = Math.max(...cards.map(c => c.x + 200)) + 50;
  const maxY = Math.max(...cards.map(c => c.y + 120)) + 50;
  const pad = 40;
  const cw = $('.canvas-wrapper').clientWidth - pad * 2;
  const ch = $('.canvas-wrapper').clientHeight - pad * 2;
  const zx = cw / (maxX - minX);
  const zy = ch / (maxY - minY);
  const wantedZoom = Math.min(zx, zy, 1.2);
  setZoom(wantedZoom);
  panX = pad - minX * zoom;
  panY = pad - minY * zoom;
  updateCanvasTransform();
}

/* ---------- 13.  UNDO / REDO ---------- */
function pushUndo() {
  undoStack.push(JSON.stringify(workspace));
  redoStack.length = 0;
  $('#undoBtn').disabled = false;
  $('#redoBtn').disabled = true;
}
function undo() {
  if (!undoStack.length) return;
  redoStack.push(JSON.stringify(workspace));
  workspace = JSON.parse(undoStack.pop());
  rebuildCanvas();
  $('#redoBtn').disabled = false;
  if (!undoStack.length) $('#undoBtn').disabled = true;
}
function redo() {
  if (!redoStack.length) return;
  undoStack.push(JSON.stringify(workspace));
  workspace = JSON.parse(redoStack.pop());
  rebuildCanvas();
  $('#undoBtn').disabled = false;
  if (!redoStack.length) $('#redoBtn').disabled = true;
}
function registerUndoHooks() {
  $('#undoBtn').disabled = true;
  $('#redoBtn').disabled = true;
}
function rebuildCanvas() {
  $('#canvas').innerHTML = '';
  lines.forEach(l => l.remove());
  lines = [];
  workspace.cards.forEach(drawCard);
  workspace.wires.forEach(drawWire);
}

/* ---------- 14.  SAVE ---------- */
function saveWorkspace() {
  fetch('/api/workspace', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(workspace) });
}

/* ---------- 15.  TOAST ---------- */
function toast(msg, level = 'info') {
  const container = $('#toastContainer');
  const div = document.createElement('div');
  div.className = 'toast ' + level;
  div.textContent = msg;
  container.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}