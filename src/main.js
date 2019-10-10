import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueLocalStorage)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted() {
    const theme = Vue.localStorage.get('dark-theme')
    const vibrate = Vue.localStorage.get('vibrate')
    const config = Vue.localStorage.get('config')
    const state = Vue.localStorage.get('state')
    this.$store.dispatch('setTheme', JSON.parse(theme))
    this.$store.dispatch('allowVibrate', JSON.parse(vibrate))
    this.$store.dispatch('setConfig', JSON.parse(config))
    this.$store.dispatch('setAppState', JSON.parse(state))
  }
}).$mount('#app')
