import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeComponentName: 'time-app',
    darkTheme: false,
    timerRunning: false,
    config: {
      timer: '00:00:00',
      rep: 0
    },
    repRemaining: 0,
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
    },
    changeConfig(state, payload) {
      state.config = payload
      state.repRemaining = payload.rep
    },
    decreaseRep(state, payload) {
      state.repRemaining = payload
    },
    setRunning(state, payload) {
      state.timerRunning = payload
    },
    resetRep(state) {
      state.repRemaining = state.config.rep
    }
  },
  actions: {
    allowVibrate({ commit }, payload) {
      commit('allowVibrate', payload)
    },
    resetRep({ commit }) {
      commit('resetRep')
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
    },
    changeConfig({ commit, state }, payload) {
      if (state.config == payload) return
      if (payload.timer == '') payload.timer = '00:00:00'
      if (payload.rep == '') payload.rep = 0
      commit('changeConfig', payload)
    },
    decreaseRep({ commit, state }) {
      const rep = (state.repRemaining -= 1)
      commit('decreaseRep', rep)
    },
    setRunning({ commit }, payload) {
      commit('setRunning', payload)
    }
  },
  getters: {
    getTheme(state) {
      return state.darkTheme
    },
    homeComponentName(state) {
      return state.homeComponentName
    },
    config(state) {
      return state.config
    },
    repRemaining(state) {
      return state.repRemaining
    },
    timerRunning(state) {
      return state.timerRunning
    },
    allowVibrate(state) {
      return state.allowVibrate
    }
  }
})
