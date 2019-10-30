import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    time: '00:00',
    timeBegan: null,
    timeStopped: null,
    timeSaved: 0,
    stopTime: 0,
    intervalID: undefined,
    running: undefined
  },
  mutations: {
    time: (state, payload) => {
      state.time = payload
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
