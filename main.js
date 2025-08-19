const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Créer la fenêtre de l'application
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
let winajouter = new BrowserWindow({
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html');
  winajouter.loadFile('ajouter_membr.html');
}

app.whenReady().then(createWindow);
