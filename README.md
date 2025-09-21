# 🤖 AI-Cards – Infinite Visual AI Workbench  
**Version 2.0.0** | MIT License | Windows / macOS / Linux | Zero external SaaS

---

## 1. What it is (TL;DR)
A **100 % local**, **node-based** IDE where you:

* Drag “cards” (micro-services) onto an **infinite canvas**  
* Wire them into **any AI pipeline** you need  
* Run each card in **NodeJS**, **Python**, or **Shell**  
* Talk to **local AI tools** (Ollama, ComfyUI, Stable-Diffusion-webui, LM-Studio…) or **cloud APIs** (OpenAI, Anthropic, Google…)  
* **Live-error-bus** with retry / fallback / logging / viewer  
* **Zoom, pan, grid-snap, undo/redo, auto-save, dark-theme, mini-map**  
* Add or delete cards **at run-time** – no rebuild, no cloud account, no Docker required  

Think “Flowise + Node-RED” shrunk into a single folder you can `git clone` and run in **30 seconds**.

---

## 2. 30-Second Quick-Start (Windows example)
```bash
git clone https://github.com/your-name/ai-cards.git
cd ai-cards
make-ai-cards.bat     # creates folder tree
launch-ai-cards.bat   # installs deps, opens browser
```
Browser pops at **http://localhost:3000** – drop cards, wire, hit ▶ run.

macOS / Linux
```bash
./make-ai-cards.sh && ./launch-ai-cards.sh
```

---

## 3. File-Tree Overview
```
ai-cards/
│
├─ server.js                 # Express + Socket.IO engine (≈ 300 LOC)
├─ package.json              # Dependencies: express, socket.io, uuid, cors, leader-line
│
├─ cards/                    # Card templates – any *.json here becomes a template
│  ├─ hello-js.json          # JS demo card
│  ├─ hello-js.js
│  ├─ hello-py.json          # Python demo card
│  ├─ hello-py.py
│  ├─ llama-local.json       # Local Llama-3 via Ollama REST
│  ├─ llama-local.js
│  └─ …add unlimited cards
│
├─ public/                   # Single-page application
│  ├─ index.html             # 20 lines
│  ├─ flow.js                # Full IDE (zoom, pan, undo, mini-map, dark-theme)
│  ├─ errors.html            # Real-time error viewer + CSV export
│  └─ style.css              # Unified dark-theme
│
├─ make-ai-cards.bat|sh      # One-time scaffold generator
├─ launch-ai-cards.bat|sh    # Start script (npm install + open browser)
└─ README.md                 # This file
```

---

## 4. Feature Highlights (v2.0)
| Feature | Description |
|---------|-------------|
| **Canvas** | Infinite zoom/pan, grid-snap, mini-map, fit-to-screen |
| **Cards** | NodeJS / Python / Shell scripts – drop JSON + script into `cards/` |
| **Wiring** | Hold **W** + click two cards – visual arrows (Leader-Line) |
| **Real-time** | Socket.IO broadcasts outputs to every card instantly |
| **Error-Bus** | Central retry (exponential back-off), fallback payload, live toast, searchable log viewer |
| **Undo/Redo** | Full history stack (Ctrl-Z / Ctrl-Y) |
| **Auto-Save** | Workspace persisted every 3 s |
| **Search** | Component panel filter + canvas search |
| **Theming** | Consistent dark theme across canvas & error viewer |
| **Export** | Workspace = plain JSON – git-friendly, copy/paste shareable |
| **Extensible** | Zero-build – add cards, themes, or REST routes on the fly |

---

## 5. Card Anatomy (JSON)
Every card is a **template** + **script**.

**Template** (`cards/*.json`)
```json
{
  "id": "unique-name",
  "name": "Pretty Name",
  "icon": "🤖",
  "color": "#22c55e",
  "inputs": ["prompt", "temperature"],
  "outputs": ["reply", "tokens"],
  "timeout": 15000,
  "haltOnError": false,
  "fallbackOutput": { "error": "LLM unavailable", "reply": "" },
  "env": { "OPENAI_API_KEY": "sk-..." },
  "exec": { "type": "node", "file": "script.js" }
}
```

**Script** (`cards/script.js`)
- Receives **JSON** on **stdin**  
- Must print **JSON** on **stdout** (anything else → logs)  
- Automatically sandboxed in child-process with timeout & retry

Example (Node)
```js
#!/usr/bin/env node
let data = '';
process.stdin.on('data', d => data += d);
process.stdin.on('end', () => {
  const {prompt} = JSON.parse(data);
  console.log(JSON.stringify({reply: `Echo: ${prompt}`}));
});
```

---

## 6. Runtime Data-Flow
1. Drop card → instance gets `instanceId`  
2. Edit input JSON in card textarea  
3. Click **▶** → payload + last outputs sent via Socket.IO  
4. Server spawns child-process (node/python/sh) with timeout & retry  
5. Script stdout → JSON broadcast to **all** connected cards  
6. Any card can read any field: `payload.reply`, `payload.image`, …  
7. Wires are **visual only** – actual data travels through the event-bus; wires remind you of design intent

---

## 7. Keyboard Shortcuts
| Key | Action |
|-----|--------|
| **A** | Open “Add Card” menu |
| **W** + click | Enter wire-mode (click two cards) |
| **Del** (selected card/wire) | Remove |
| **Ctrl-Z / Ctrl-Y** | Undo / Redo |
| **Ctrl-S** | Force save |
| **Mouse-wheel** | Zoom in/out |
| **Shift + drag** | Pan canvas |

---

## 8. Error-Bus Deep-Dive
* **Per-card** retry with exponential back-off (configurable)  
* **Severity levels**: info / warn / error  
* **Live toast** pop-ups on canvas  
* **Searchable / exportable** error viewer at `/errors.html`  
* **Optional halt** on non-recoverable error – pipeline continues with fallback payload  
* **Log-file** rotation ready (`logs/error.log`)

---

## 9. Extending – 5-Minute Recipes
| Goal | How |
|------|-----|
| **New AI tool** | drop `mytool.json` + script in `cards/`, refresh browser |
| **Docker sandbox** | change `exec.type` → `"docker"` and adjust runner |
| **Cloud API keys** | add `"env": {"OPENAI_API_KEY": "sk-..."}` in card JSON |
| **Persistent storage** | uncomment `fs.writeFile` lines in `server.js` |
| **Auto-layout** | import dagre in `flow.js`, call `dagre.layout()` |
| **Package globally** | `npm pack` then `npm i -g ai-cards.tgz` → `ai-cards` command everywhere |

---

## 10. Troubleshooting
| Symptom | Fix |
|---------|-----|
| Port 3000 in use | `PORT=3001 npm start` |
| Python not found | install Python ≥ 3.8 and ensure `python` / `python3` is in PATH |
| Ollama 404 | start Ollama first: `ollama serve` & `ollama pull llama3` |
| Canvas empty after refresh | check browser console → Socket.IO connected? |

---

## 11. Road-Map (PRs welcome)
- [ ] Plugin marketplace (git-based card registry)  
- [ ] Desktop build (Electron) with native file dialogs  
- [ ] Built-in vector-DB node (Chroma / Qdrant)  
- [ ] Kubernetes operator for remote card runners  
- [ ] Collaborative multi-user cursors (WebRTC)

---

## 12. License
MIT – do whatever you want, just keep the copyright line.

Enjoy your **infinite-card AI playground!**