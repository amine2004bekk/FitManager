// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile('index.html');
});

// Listen from renderer to switch pages
ipcMain.on('navigate', (event, page) => {
  win.loadFile(page);
});
