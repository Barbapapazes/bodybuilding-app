const { VuetifyProgressiveModule } = require('vuetify-loader')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/bodybuilding-app/' : '/',

  productionSourceMap: false
}
