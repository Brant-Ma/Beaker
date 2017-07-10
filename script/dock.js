// import module
const tool = require('./toolkit')
const {app, Menu} = require('electron')

// define module
const dock = {}

const template = [
  {
    label: `😊 欢迎使用 ${app.getName()}`,
    click() { tool.about('me') }
  },
  {
    label: '👻 快捷入口',
    submenu: [
      {label: 'One'},
      {label: 'Two'}
    ]
  },
  {
    label: '⭐️ 诶呦不错 赏颗星星 ',
    click() { tool.about('repo') }
  }
]

dock.setDock = function() {
  let dockMenu = Menu.buildFromTemplate(template)
  app.dock.setMenu(dockMenu)
}

// export module
module.exports = dock
