// import module
const ele = require('electron')

// define shortcut
const open = ele.shell.openExternal

// define module
const tool = {}

tool.about = (type) => {
  let url = 'https://github.com/Brant-Ma'
  url += (type === 'me' ? '' : '/Beaker')
  open(url)
}

// export module
module.exports = tool
