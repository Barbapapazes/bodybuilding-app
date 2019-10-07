const path = require('path')

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/bodybuilding-app/' : '/',

  productionSourceMap: false,

  pwa: {
    name: 'Sport Companion',
    themeColor: '#1565c0',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: 'manifest.webmanifest',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
