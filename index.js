import { app, BrowserWindow } from 'electron';
import 'path';
import { WIDTH, HEIGHT } from './const.js';

function createWindow() {
  const win = new BrowserWindow({
    width: WIDTH,
    height: HEIGHT,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js')
      devTools: false
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
