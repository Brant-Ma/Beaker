// import module
const path = require('path')

// export module
module.exports = {
  ROOT: __dirname,

  APP_NAME: 'Beaker',
  APP_SITE: 'https://github.com/Brant-Ma/Beaker',
  APP_ICON: path.join(__dirname, 'static', 'icon.png'),

  PAGE_DATA: path.join(__dirname, 'static', 'data.json'),
  PAGE_INDEX: `file://${path.join(__dirname, 'renderer', 'index.html')}`,

  AUTHOR_PROFILE: 'https://github.com/Brant-Ma',
}
