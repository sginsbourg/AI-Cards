@echo off
title AI-cards
color 1F
setlocal

set "CD=C:\Users\sgins\OneDrive\Documents\GitHub"
set "ROOT=%CD%\ai-cards"

:: --- sanity checks ---
if not exist "%ROOT%\package.json" (
    echo ERROR:  "%ROOT%" does not look like the ai-cards project.
    echo         Please run this launcher from the folder that contains the ai-cards directory.
    pause
    exit /b 1
)

:: --- optional auto-install ---
where node >nul 2>nul || (
    echo Node.js not found. Please install Node.js ^(https://nodejs.org^) and try again.
    pause
    exit /b 1
)

echo Installing dependencies (first run only) …
cd /d "%ROOT%"
call npm install >nul 2>&1 || (
    echo npm install failed.
    pause
    exit /b 1
)

:: --- start the server ---
echo Starting AI-Cards on http://localhost:3000 …
start http://localhost:3000
npm start

pause
exit