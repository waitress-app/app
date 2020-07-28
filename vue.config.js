module.exports = {
  pwa: {
    name: 'Waitress',
    themeColor: '#9165f2',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      background_color: '#FFFFFF',
      shortcuts: [
        {
          name: 'Abrir menu',
          short_name: 'Menu',
          url: '/menu?utm_source=homescreen',
          icons: [
            {
              src: 'img/shortcuts/menu-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            }
          ]
        },
        {
          name: 'Abrir pedidos',
          short_name: 'Pedidos',
          url: '/orders?utm_source=homescreen',
          icons: [
            {
              src: 'img/shortcuts/orders-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            }
          ]
        }
      ]
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js'
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt',
      fallbackLocale: 'pt',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
