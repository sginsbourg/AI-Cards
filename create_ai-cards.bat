@echo off
setlocal enabledelayedexpansion

set "CD=C:\Users\sgins\OneDrive\Documents\GitHub"
set "ROOT=%CD%\ai-cards"

echo Creating AI-Cards scaffold in %ROOT% …
md "%ROOT%\cards" 2>nul
md "%ROOT%\public" 2>nul

:: ---------- package.json ----------
(
echo {
echo   "name": "ai-cards",
echo   "version": "1.0.0",
echo   "main": "server.js",
echo   "scripts": { "start": "node server.js", "dev": "nodemon server.js" },
echo   "dependencies": {
echo     "express": "^4",
echo     "socket.io": "^4",
echo     "uuid": "^9",
echo     "cors": "^2"
echo   },
echo   "devDependencies": { "nodemon": "^3" }
echo }
) > "%ROOT%\package.json"

:: ---------- server.js (stub) ----------
type nul > "%ROOT%\server.js"

:: ---------- public assets ----------
type nul > "%ROOT%\public\index.html"
type nul > "%ROOT%\public\flow.js"
type nul > "%ROOT%\public\style.css"

:: ---------- sample card templates ----------
(
echo {
echo   "id": "hello-js",
echo   "name": "Hello JS",
echo   "icon": "👋",
echo   "color": "#3b82f6",
echo   "inputs": ["name"],
echo   "outputs": ["greeting"],
echo   "exec": { "type": "node", "file": "hello-js.js" }
echo }
) > "%ROOT%\cards\hello-js.json"

type nul > "%ROOT%\cards\hello-js.js"

(
echo {
echo   "id": "hello-py",
echo   "name": "Hello Python",
echo   "icon": "🐍",
echo   "color": "#f59e0b",
echo   "inputs": ["name"],
echo   "outputs": ["greeting"],
echo   "exec": { "type": "python", "file": "hello-py.py" }
echo }
) > "%ROOT%\cards\hello-py.json"

type nul > "%ROOT%\cards\hello-py.py"

echo.
echo Done!  Scaffold ready at:
echo   %ROOT%
echo.
echo Next steps:
echo   cd ai-cards
echo   npm install
echo   npm start
echo.
pause