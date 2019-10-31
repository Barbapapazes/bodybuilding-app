import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    countdown: '00:00:00',
    intervalID: undefined,
    now: null,
    end: null,
    running: undefined
  },
  mutations: {
    countdown: (state, payload) => {
      state.countdown = payload
    },
    intervalID: (state, payload) => {
      state.intervalID = payload
    },
    now: (state, payload) => {
      state.now = payload
    },
    end: (state, payload) => {
      state.end = payload
    },
    running: (state, payload) => {
      state.running = payload
    }
  },
  actions: {
    countdown: ({ commit }, payload) => {
      commit('countdown', payload)
    },
    intervalID: ({ commit }, payload) => {
      commit('intervalID', payload)
    },
    now: ({ commit }, payload) => {
      commit('now', payload)
    },
    end: ({ commit }, payload) => {
      commit('end', payload)
    },
    running: ({ commit }, payload) => {
      commit('running', payload)
    }
  },
  getters: {
    countdown: state => {
      const regexTime = /(\d{2}):(\d{2}):(\d{2})$/gm
      const groups = regexTime.exec(state.countdown)
      if (groups[1] == '00') {
        return groups[2] + ':' + groups[3]
      } else {
        return state.countdown
      }
    },
    intervalID: state => {
      return state.intervalID
    },
    now: state => {
      return state.now
    },
    end: state => {
      return state.end
    },
    running: state => {
      return state.running
    }
  }
}
