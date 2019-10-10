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
    homeComponentName: 'time-app',
    darkTheme: false,
    allowVibrate: false
  },
  mutations: {
    allowVibrate(state, payload) {
      state.allowVibrate = payload
    },
    setTheme(state, payload) {
      state.darkTheme = payload
    },
    homeComponentName(state, payload) {
      state.homeComponentName = payload
    }
  },
  actions: {
    allowVibrate({ commit }, payload) {
      commit('allowVibrate', payload)
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
    homeComponentName({ commit }, payload) {
      commit('homeComponentName', payload)
    }
  },
  getters: {
    getTheme(state) {
      return state.darkTheme
    },
    homeComponentName(state) {
      return state.homeComponentName
    },
    allowVibrate(state) {
      return state.allowVibrate
    }
  }
})
