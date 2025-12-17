@echo off
echo ===================================================
echo     Launching Free Spirit Money App...
echo ===================================================
echo.
echo Starting local server on port 8080...
echo You can access the app at: http://localhost:8080
echo.
call npx -y http-server ./MoneyPaths -p 8080 -o
pause
