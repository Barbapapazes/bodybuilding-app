import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeComponentName: 'time-app',
    timerRunning: false,
    config: {
      timer: '00:00:10',
      rep: 5
    }
  },
  mutations: {
    homeComponentName(state, payload) {
      state.homeComponentName = payload
    },
    changeConfig(state, payload) {
      state.config = payload
    },
    decreaseRep(state, payload) {
      state.config.rep = payload
    },
    setRunning(state, payload) {
      state.timerRunning = payload
    }
  },
  actions: {
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
      const rep = (state.config.rep -= 1)
      commit('decreaseRep', rep)
    },
    setRunning({ commit }, payload) {
      commit('setRunning', payload)
    }
  },
  getters: {
    homeComponentName(state) {
      return state.homeComponentName
    },
    config(state) {
      return state.config
    },
    timerRunning(state) {
      return state.timerRunning
    }
  }
})
