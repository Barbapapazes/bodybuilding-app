import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
        name: 'privacy-cookies',
        component: () =>
          import(
            /* webpackChunkName: "PrivacyCookies" */ '@/components/about/PrivacyCookies.vue'
          )
      },
      {
        path: 'terms-of-use',
        name: 'terms-of-use',
        component: () =>
          import(
            /* webpackChunkName: "TermsofUse" */ '@/components/about/TermsofUse.vue'
          )
      },
      {
        path: 'this-website',
        name: 'this-website',
        component: () =>
          import(
            /* webpackChunkName: "ThisWebsite" */ '@/components/about/ThisWebsite.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
