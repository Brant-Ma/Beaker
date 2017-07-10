const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const dock = require('./script/dock')

// keep a reference of window object
let win

function createWindow() {
  // create window
  win = new BrowserWindow({width: 800, height: 600})

  // load index.html
  win.loadURL(url.format({
    pathname: path.resolve('.', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // open devtools
  // win.webContents.openDevTools()

  // release the reference of window object
  win.on('closed', () => { win = null })

  // set dock
  dock.setDock()
}

// event hook for application

// ready
app.on('ready', createWindow)

// quit
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// start
app.on('activate', () => {
  if (win === null) createWindow()
})
