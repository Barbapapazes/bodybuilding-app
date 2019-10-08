import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "About" */ '@/views/About.vue'),
      children: [
        {
          path: 'privacy-cookies',
          component: () =>
            import(
              /* webpackChunkName: "PrivacyCookies" */ '@/views/PrivacyCookies.vue'
            )
        },
        {
          path: 'terms-of-use',
          component: () =>
            import(
              /* webpackChunkName: "TermsofUse" */ '@/views/TermsofUse.vue'
            )
        }
      ]
    }
  ]
})
