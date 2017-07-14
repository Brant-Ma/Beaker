// import module
const ele = require('electron')
let win = require('./index')

const windowSetter = {}

windowSetter.init = (page) => {
  win = new ele.BrowserWindow({ width: 800, height: 600 })
  win.loadURL(page)
  win.on('closed', () => { win = null })
}

// export module
module.exports = windowSetter
