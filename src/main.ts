import {app, BrowserWindow} from 'electron'
import * as path from 'path';

let win

function createWindow() {

  win = new BrowserWindow();
  win.loadFile(path.join(__dirname, '../index.html'));
  
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

app.on('ready', createWindow);