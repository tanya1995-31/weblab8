:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
::exit /b

git init
git add .
git commit -m "first commit"
git branch -M main
https://github.com/tanya1995-31/webprojmain.git
git push -u origin main
