// import module
const ele = require('electron')
const dockSetter = require('./dock')
const windowSetter = require('./window')
const config = require('../config')

// basic identifier
let win
const app = ele.app

// event hook for app
app.on('ready', () => {
  dockSetter.init(config.APP_ICON)
  windowSetter.init(config.PAGE_INDEX)
})

app.on('activate', () => {
  if (win === null) {
    windowSetter.init(config.PAGE_INDEX)
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// export module
module.exports = win
