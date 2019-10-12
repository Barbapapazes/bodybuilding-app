import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    appState: {
      timer: '00:00:00',
      series: '0',
      stopwatch: '00.00'
    },
    countdownRunning: false,
    stopwatchRunning: false
  },
  mutations: {
    setAppState(state, payload) {
      state.appState = {
        series: String(payload.series),
        timer: String(payload.timer),
        stopwatch: String(payload.stopwatch)
      }
    },
    setSeries(state, payload) {
      state.appState.series = payload
    },
    setCountdown(state, payload) {
      state.appState.timer = payload
    },
    setCountdownRunning(state, payload) {
      state.countdownRunning = payload
    },
    resetCountdown(state, payload) {
      state.appState = {
        series: String(payload.series),
        timer: String(payload.timer),
        stopwatch: String(payload.stopwatch)
      }
    },
    setStopwatch(state, payload) {
      state.appState.stopwatch = payload
    },
    setStopwatchRunning(state, payload) {
      state.stopwatchRunning = payload
    },
    resetStopwatch(state, payload) {
      state.appState = {
        series: String(payload.series),
        timer: String(payload.timer),
        stopwatch: String(payload.stopwatch)
      }
    }
  },
  actions: {
    setAppState({ dispatch, commit, state }, payload) {
      const data = {
        timer: payload.timer,
        stopwatch: payload.stopwatch,
        series: payload.series
      }
      commit('setAppState', data)
      dispatch('saveAppState')
    },
    saveAppState({ dispatch, commit, state, rootState }, payload) {
      const appState = state.appState
      Vue.localStorage.set('state', JSON.stringify(appState))
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
    resetCountdown({ dispatch, commit, rootState, state }) {
      const data = {
        timer: rootState.config.config.timer,
        stopwatch: state.appState.stopwatch,
        series: rootState.config.config.series
      }
      commit('resetCountdown', data)
      dispatch('saveAppState')
    },
    setCountdownRunning({ commit }, payload) {
      commit('setCountdownRunning', payload)
    },
    saveCountdownRunning({ commit, state }, payload) {
      const running = payload
      Vue.localStorage.set('countdownRunning', JSON.stringify(running))
    },
    setStopwatch({ dispatch, commit }, payload) {
      commit('setStopwatch', payload)
      dispatch('saveAppState')
    },
    resetStopwatch({ dispatch, commit, state }) {
      const data = {
        timer: state.appState.timer,
        stopwatch: '00.00',
        series: state.appState.series
      }
      commit('resetStopwatch', data)
      dispatch('saveAppState')
    },
    setStopwatchRunning({ commit }, payload) {
      commit('setStopwatchRunning', payload)
    },
    saveStopwatchRunning({ commit, state }, payload) {
      const running = payload
      Vue.localStorage.set('stopwatchRunning', JSON.stringify(running))
    },
    saveTimeCountdown({ commit }, payload) {
      const time = Date.parse(new Date())
      Vue.localStorage.set('timeCountdown', JSON.stringify(time))
    },
    saveTimeStopwatch() {
      const time = Date.parse(new Date()) + new Date().getMilliseconds()
      Vue.localStorage.set('timeStopwatch', JSON.stringify(time))
    }
  },
  getters: {
    appState(state) {
      return state.appState
    },
    countdownRunning(state) {
      return state.countdownRunning
    },
    stopwatchRunning(state) {
      return state.stopwatchRunning
    }
  }
}
