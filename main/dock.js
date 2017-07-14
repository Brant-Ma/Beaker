// import module
const { app, Menu, nativeImage } = require('electron')
const tool = require('./toolkit')

// basic identifier
const dock = app.dock

// define module
const dockInit = {}

const template = [
  {
    label: `😊 欢迎使用 ${app.getName()}`,
    click() { tool.about('me') },
  },
  {
    label: '👻 快捷入口',
    submenu: [
      { label: 'One' },
      { label: 'Two' },
    ],
  },
  {
    label: '⭐️ 诶呦不错 赏颗星星 ',
    click() { tool.about('repo') },
  },
]

const initMenu = () => {
  const dockMenu = Menu.buildFromTemplate(template)
  dock.setMenu(dockMenu)
}

const initIcon = (src) => {
  const image = nativeImage.createFromPath(src)
  dock.setIcon(image)
}

dockInit.init = (src) => {
  initMenu()
  initIcon(src)
}

// export module
module.exports = dockInit
