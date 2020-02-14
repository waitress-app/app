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
`
const head = document.head || document.getElementsByTagName('head')[0]
const style = document.createElement('style')

head.appendChild(style)

style.type = 'text/css'
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css
} else {
  style.appendChild(document.createTextNode(css))
}

const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false
// const favicon = document.getElementById('favicon');
// const manifest = document.getElementById('manifest');
function switchIcon (darkMode) {
  if (darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark')
    // favicon.href = '%PUBLIC_URL%/favicon-dark.ico';
    // manifest.href='%PUBLIC_URL%/manifest-dark.json'
  } else {
    // favicon.href = '%PUBLIC_URL%/favicon-light.ico';
    // manifest.href='%PUBLIC_URL%/manifest-light.json'
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => switchIcon(e.matches))
switchIcon(darkMode)
