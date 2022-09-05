const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path');
const fs = require('fs');

let win;

const createWindow = () => {
    win = new BrowserWindow({
    width: 700,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadFile('index.html')
}

function toggleDevTools(){
  win.webContents.toggleDevTools()
}

function createShortcuts() {
  globalShortcut.register('CmdOrCtrl+J',toggleDevTools)
}

app.whenReady().then(() => {
  createWindow()
  createShortcuts()


  app.on('activate', ()=> {
    if (BrowserWindow.getAllWindows().length === 0 ) {
        createWindow()
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
  });
})