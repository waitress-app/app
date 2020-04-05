import main from '@/assets/css/main.styl'
import common from '@/assets/css/common.css'

const css = `
:root {
  --color-primary: ${process.env.VUE_APP_PRIMARY_COLOR_LIGHT};
  --color-primary-rgba: ${process.env.VUE_APP_PRIMARY_COLOR_LIGHT}50;
  --color-secundary: ${process.env.VUE_APP_SECUNDARY_COLOR_LIGHT};
  --color-secundary-rgba: ${process.env.VUE_APP_SECUNDARY_COLOR_LIGHT}50;
}
[data-theme="dark"] {
  --color-primary: ${process.env.VUE_APP_PRIMARY_COLOR_DARK};
  --color-primary-rgba: ${process.env.VUE_APP_PRIMARY_COLOR_DARK}50;
  --color-secundary: ${process.env.VUE_APP_SECUNDARY_COLOR_DARK};
  --color-secundary-rgba: ${process.env.VUE_APP_SECUNDARY_COLOR_DARK}50;
}
` + main + common
const head = document.head || document.getElementsByTagName('head')[0]
const style = document.createElement('style')

head.appendChild(style)

style.type = 'text/css'
style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css))

const switchTheme = (darkMode) => document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
const toogleTheme = () => {
  const theme = document.documentElement.getAttribute('data-theme')
  switchTheme(theme !== 'dark')
}
if (window.matchMedia('(prefers-color-scheme: dark)').addEventListener) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => switchTheme(e.matches))
}

const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false
switchTheme(darkMode)
export {
  switchTheme,
  toogleTheme
}
