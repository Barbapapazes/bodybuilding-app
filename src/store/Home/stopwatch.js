import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    time: '00.00',
    timeBegan: null,
    timeStopped: null, // when the button stop is click
    timeSaved: 0,
    stopTime: 0, // when the page is refresh
    intervalID: undefined,
    running: undefined
  },
  mutations: {
    time: (state, payload) => {
      state.time = payload
      Vue.localStorage.set('time', payload)
      Vue.localStorage.set(
        'timeSaved',
        JSON.stringify(Date.parse(new Date()) + new Date().getMilliseconds())
      )
    },
    timeBegan: (state, payload) => {
      state.timeBegan = payload
    },
    timeStopped: (state, payload) => {
      state.timeStopped = payload
    },
    timeSaved: (state, payload) => {
      state.timeSaved = payload
    },
    stopTime: (state, payload) => {
      state.stopTime = payload
    },
    intervalID: (state, payload) => {
      state.intervalID = payload
    },
    running: (state, payload) => {
      state.running = payload
      Vue.localStorage.set('stopwatchRunning', payload)
    }
  },
  actions: {
    time: ({ commit }, payload) => {
      commit('time', payload)
    },
    timeBegan: ({ commit }, payload) => {
      commit('timeBegan', payload)
    },
    timeStopped: ({ commit }, payload) => {
      commit('timeStopped', payload)
    },
    timeSaved: ({ commit }, payload) => {
      commit('timeSaved', payload)
    },
    stopTime: ({ commit }, payload) => {
      commit('stopTime', payload)
    },
    intervalID: ({ commit }, payload) => {
      commit('intervalID', payload)
    },
    running: ({ commit }, payload) => {
      commit('running', payload)
    }
  },
  getters: {
    time: state => {
      return state.time
    },
    timeBegan: state => {
      return state.timeBegan
    },
    timeStopped: state => {
      return state.timeStopped
    },
    timeSaved: state => {
      return state.timeSaved
    },
    stopTime: state => {
      return state.stopTime
    },
    intervalID: state => {
      return state.intervalID
    },
    running: state => {
      return state.running
    }
  }
}
