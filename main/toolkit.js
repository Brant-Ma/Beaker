// import module
const ele = require('electron')
const config = require('../config')

// define module
const tool = {}

tool.about = (type) => {
  let url = type === 'me' ? config.AUTHOR_PROFILE : config.APP_SITE
  ele.shell.openExternal(url)
}

// export module
module.exports = tool
