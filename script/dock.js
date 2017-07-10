// import module
const {app, Menu, nativeImage} = require('electron')
const tool = require('./toolkit')

// basic identifier
let dock = app.dock

// define module
const dockInit = {}

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

let initMenu = () => {
  let dockMenu = Menu.buildFromTemplate(template)
  dock.setMenu(dockMenu)
}

let initIcon = src => {
  let image = nativeImage.createFromPath(src)
  dock.setIcon(image)
}

dockInit.init = src => {
  initMenu()
  initIcon(src)
}

// export module
module.exports = dockInit
