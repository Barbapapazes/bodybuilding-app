import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    series: '0',
    time: '00:00:00',
    apply: false
  },
  mutations: {
    time: (state, payload) => {
      state.time = payload
    },
    series: (state, payload) => {
      state.series = payload
    },
    apply: (state, payload) => {
      state.apply = payload
    }
  },
  actions: {
    time: ({ commit }, payload) => {
      commit('time', payload)
    },
    series: ({ commit }, payload) => {
      commit('series', payload)
    },
    apply: ({ commit }, payload) => {
      commit('apply', payload)
    }
  },
  getters: {
    time: state => {
      return state.time
    },
    series: state => {
      return state.series
    },
    apply: state => {
      return state.apply
    }
  }
}
