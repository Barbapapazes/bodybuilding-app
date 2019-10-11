import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'

import config from '@/store/config'
import appState from '@/store/appState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config: config,
    appState: appState
  },
  state: {
    allowVibrate: false,
    darkTheme: false,
    componentsHome: 'time-app'
  },
  mutations: {
    setVibrate(state, payload) {
      state.allowVibrate = payload
    },
    setTheme(state, payload) {
      state.darkTheme = payload
    },
    componentsHome(state, payload) {
      state.componentsHome = payload
    }
  },
  actions: {
    setVibrate({ commit }, payload) {
      commit('setVibrate', payload)
      Vue.localStorage.set('vibrate', payload)
    },
    setTheme({ commit, state }, payload) {
      let newTheme
      if (payload == undefined) {
        newTheme = !state.darkTheme
      } else {
        newTheme = payload
      }
      vuetify.framework.theme.dark = newTheme
      Vue.localStorage.set('dark-theme', newTheme)
      commit('setTheme', newTheme)
    },
    componentsHome({ commit }, payload) {
      commit('componentsHome', payload)
    }
  },
  getters: {
    componentsHome(state) {
      return state.componentsHome
    },
    vibrate(state) {
      return state.allowVibrate
    }
  }
})
