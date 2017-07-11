// import module
const ele = require('electron')
const dockSetter = require('./dock')
const windowSetter = require('./window')
const config = require('../config')

// basic identifier
let win
let app = ele.app

// event hook for app
app.on('ready', win => {
  dockSetter.init(config.APP_ICON)
  windowSetter.init(win, config.PAGE_INDEX)
})

app.on('activate', () => {
  if (win === null) {
    createWin()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
