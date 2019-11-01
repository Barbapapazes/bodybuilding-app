const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const publicPath =
  process.env.NODE_ENV === 'production' ? '/bodybuilding-app/' : '/'

const config = {
  //transpileDependencies: ['vuetify'],

  publicPath: publicPath,

  productionSourceMap: false,

  pwa: {
    name: 'Sport Companion',
    themeColor: '#1565c0',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath: 'manifest.webmanifest',
    inject: true,
    ios: true,

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      globDirectory: './public',
      globPatterns: ['**/*.{ico,svg,png}', 'img/icons/*.{png,svg}'],
      modifyURLPrefix: {
        'img/icons/': '/bodybuilding-app/img/icons/',
        '': '/bodybuilding-app/'
      },

      swSrc: 'src/service-worker.js'
    }
  },
  configureWebpack: {
    plugins: []
  }
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack.plugins.push(
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/about']
    })
  )
  config.configureWebpack.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
