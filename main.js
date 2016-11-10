/*This line is to reload the app when a file have changed*/
require('electron-reload')(__dirname + "/build");

'use strict';
const {app, BrowserWindow} = require('electron');
const path = require('path')
const url = require('url')

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createMainWindow);
