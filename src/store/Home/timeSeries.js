import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    series: '',
    time: ''
  },
  mutations: {
    time: (state, payload) => {
      state.time = payload
    }
  },
  actions: {
    time: ({ commit }, payload) => {
      commit('time', payload)
    }
  },
  getters: {
    time: state => {
      return state.time
    }
  }
}
