// import module
const ele = require('electron')
const dockInit = require('./script/dock')

// basic identifier
let win
let app = ele.app

// create window
let create = () => {
  win = new ele.BrowserWindow({width: 800, height: 600})

  win.loadURL(`file://${__dirname}/index.html`)

  win.on('closed', () => { win = null })

  dockInit.init('image/icon.png')
}

// event hook for application
app.on('ready', create)

app.on('activate', () => {
  if (win === null) create()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
