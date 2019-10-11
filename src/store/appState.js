import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    appState: {
      timer: '00:00:00',
      series: 0
    },
    timerRunning: false
  },
  mutations: {
    setAppState(state, payload) {
      state.appState = {
        series: String(payload.series),
        timer: String(payload.timer)
      }
    },
    setSeries(state, payload) {
      state.appState.series = payload
    },
    setCountdown(state, payload) {
      state.appState.timer = payload
    },
    setRunning(state, payload) {
      state.timerRunning = payload
    },
    resetCountdown(state, payload) {
      state.appState = {
        series: String(payload.series),
        timer: String(payload.timer)
      }
    }
  },
  actions: {
    setAppState({ dispatch, commit, state }, payload) {
      commit('setAppState', payload)
      dispatch('saveAppState')
    },
    setSeries({ dispatch, commit, state, rootState }, payload) {
      const series = String(state.appState.series - 1)
      commit('setSeries', series)
      dispatch('saveAppState')
    },
    setCountdown({ dispatch, commit }, payload) {
      commit('setCountdown', payload)
      dispatch('saveAppState')
    },
    resetCountdown({ dispatch, commit, rootState }) {
      commit('resetCountdown', rootState.config.config)
      dispatch('saveAppState')
    },
    saveAppState({ commit, state, rootState }, payload) {
      const appState = state.appState
      Vue.localStorage.set('state', JSON.stringify(appState))
    },
    setRunning({ commit }, payload) {
      commit('setRunning', payload)
    }
  },
  getters: {
    appState(state) {
      return state.appState
    },
    timerRunning(state) {
      return state.timerRunning
    }
  }
}
