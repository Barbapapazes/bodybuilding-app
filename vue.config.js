const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const PrerenderSPAPlugin = require('prerender-spa-plugin')

let config = {
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
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack.plugins.push(
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/about']
    })
  )
}

module.exports = config
