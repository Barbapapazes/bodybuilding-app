import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeComponentName: 'time-app'
  },
  mutations: {
    homeComponentName(state, payload) {
      state.homeComponentName = payload
    }
  },
  actions: {
    homeComponentName({ commit }, payload) {
      commit('homeComponentName', payload)
    }
  },
  getters: {
    homeComponentName(state) {
      return state.homeComponentName
    }
  }
})
