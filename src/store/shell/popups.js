import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    dialog: false,
    snackbar: false
  },
  mutations: {
    dialog: (state, payload) => {
      state.dialog = payload
    },
    snackbar: (state, payload) => {
      state.snackbar = payload
    }
  },
  actions: {
    dialog: ({ commit }, payload) => {
      commit('dialog', payload)
    },
    snackbar: ({ commit }, payload) => {
      commit('snackbar', payload)
    }
  },
  getters: {
    dialog: state => {
      return state.dialog
    },
    snackbar: state => {
      return state.snackbar
    }
  }
}
