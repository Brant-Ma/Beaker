// import module
const ele = require('electron')

const windowSetter = {}

windowSetter.init = (win, page) => {
  win = new ele.BrowserWindow({width: 800, height: 600})
  win.loadURL(page)
  win.on('closed', () => { win = null })
}

// export module
module.exports = windowSetter
