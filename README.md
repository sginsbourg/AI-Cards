# AI-Cards
# AI-Cards – Infinite Visual AI Workbench  
**Version 1.0.0** | MIT License | Windows / macOS / Linux

---

## 1. What it is
AI-Cards is a **100 % local**, **node-based** workbench that lets you:

* Drop “cards” (micro-services) on a canvas  
* Wire them into any pipeline you need  
* Run each card in **NodeJS**, **Python**, or **Shell**  
* Feed / consume **local AI tools** (Ollama, ComfyUI, Stable-Diffusion, LM-Studio, …) or **cloud APIs** (OpenAI, Anthropic, Google, …)  
* Add / delete / clone cards **at run-time** – no rebuild, no redeploy  
* Export / import entire workspaces as plain JSON  

Think of it as **“Flowise + Node-RED”** without external accounts, fully hackable in < 600 lines of code.

---

## 2. 30-Second Quick-Start (Windows)
1. Clone / unzip this repo  
2. Double-click `make-ai-cards.bat` → scaffold created  
3. Double-click `launch-ai-cards.bat` → browser opens http://localhost:3000  
4. Drag cards from the toolbar, wire them (hold **w** + click), hit **▶ run**  

That’s it – no Docker, no cloud keys, no build tools.

---

## 3. File-Tree Overview
```
ai-cards/
│
├─ server.js                 # Express + Socket.IO engine (≈ 180 LOC)
├─ package.json              # Dependencies: express, socket.io, uuid, cors
│
├─ cards/                    # Card templates – any *.json here becomes a template
│  ├─ hello-js.json          # JS demo card
│  ├─ hello-js.js            # script that card executes
│  ├─ hello-py.json          # Python demo card
│  ├─ hello-py.py
│  ├─ llama-local.json       # Local Llama-3 via Ollama REST
│  ├─ llama-local.js
│  └─ …add unlimited cards
│
├─ public/                   # Single-page UI
│  ├─ index.html             # 20 lines
│  ├─ flow.js                # Canvas logic + Socket.IO client
│  └─ style.css              # Minimal dark theme
│
├─ make-ai-cards.bat         # One-time scaffold generator
└─ launch-ai-cards.bat       # Start script (npm install + open browser)
```

---

## 4. Card Anatomy (JSON)
Every card is a **template** + **script**.

**Template** (`cards/*.json`)
```json
{
  "id": "unique-name",          // filename without .json
  "name": "Pretty Name",
  "icon": "🤖",                 // emoji or single char
  "color": "#22c55e",           // border / button color
  "inputs": ["prompt", "temperature"],
  "outputs": ["reply", "tokens"],
  "env": {                      // optional env vars
    "OLLAMA_HOST": "http://localhost:11434"
  },
  "exec": {
    "type": "node",             // node | python | shell
    "file": "script.js"         // relative to cards/
  }
}
```

**Script** (`cards/script.js`)
- Receives **JSON** on **stdin**  
- Must print **JSON** on **stdout** (anything else → logs)  
- Automatically sandboxed in a child-process

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

## 5. Runtime Data-Flow
1. User drops card → instance gets `instanceId`  
2. Card’s input JSON is edited in the UI  
3. Click **▶** → payload + last outputs sent via **Socket.IO**  
4. Server spawns child-process (node/python/sh)  
5. Script stdout → JSON broadcast to **all** connected cards  
6. Any card can read any field: `payload.reply`, `payload.image`, …  
7. Wires are **visual only** – actual data travels through the event-bus; wires remind you of design intent

---

## 6. Canvas Hot-Keys
| Key | Action |
|-----|--------|
| **w** + click | enter wire-mode (click two cards) |
| **Drag** card | move |
| **Double-click** card | clone |
| **Del** (selected) | remove card / wire |

---

## 7. Extending – 5-Minute Recipes
| Goal | How |
|------|-----|
| **New AI tool** | drop `mytool.json` + script in `cards/`, refresh |
| **Secret keys** | add `"env": {"OPENAI_API_KEY": "sk-..."}` in card JSON |
| **Docker sandbox** | change `exec.type` → `"docker"` and adjust server runner |
| **Persistent storage** | uncomment `fs.writeFile` lines in `server.js` |
| **Auto-layout** | import dagre in `flow.js`, call `dagre.layout()` |
| **Package globally** | `npm pack` then `npm i -g ai-cards.tgz` → `ai-cards` command everywhere |

---

## 8. Troubleshooting
| Symptom | Fix |
|---------|-----|
| `SyntaxError: missing )` | Edit `server.js` – replace template literals with `path.join()` (see §9) |
| Port 3000 in use | set `PORT=3001` before `npm start` |
| Python not found | install Python ≥ 3.8 and ensure `python` / `python3` is in PATH |
| Ollama 404 | start Ollama first: `ollama serve` & `ollama pull llama3` |

---

## 9. One-Time Syntax Patch (Windows)
If you hit the template-literal bug, open `server.js` and change:

**FROM**
```js
.forEach(f => cardTemplates.push(JSON.parse(fs.readFileSync(`cards/${f}`))));
```

**TO**
```js
.forEach(f => cardTemplates.push(JSON.parse(fs.readFileSync(path.join('cards', f), 'utf8'))));
```

(add `const path = require('path');` at top if missing).

---

## 10. Road-Map (PRs welcome)
- [ ] Undo / redo  
- [ ] Plugin marketplace (git-based)  
- [ ] Desktop build (Electron)  
- [ ] Kubernetes operator for remote runners  
- [ ] Built-in vector-DB node (Chroma / Qdrant)

---

## 11. License
MIT – do whatever you want, just keep the copyright line.

Enjoy your **infinite-card AI playground!**