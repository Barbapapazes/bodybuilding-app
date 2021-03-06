import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from '@/plugins/vuetify'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    homeComponentName: 'time-app',
    trainingComponentName: 'tables-training-app',
    drawer: false,
    theme: false
  },
  mutations: {
    homeComponentName: (state, payload) => {
      state.homeComponentName = payload
    },
    trainingComponentName: (state, payload) => {
      state.trainingComponentName = payload
    },
    drawer: (state, payload) => {
      state.drawer = payload
    },
    theme: (state, payload) => {
      state.theme = payload
    }
  },
  actions: {
    homeComponentName: ({ commit }, payload) => {
      commit('homeComponentName', payload)
    },
    trainingComponentName: ({ commit }, payload) => {
      commit('trainingComponentName', payload)
    },
    drawer: ({ commit }, payload) => {
      commit('drawer', payload)
    },
    theme: ({ commit }, payload) => {
      vuetify.framework.theme.dark = payload
      Vue.localStorage.set('theme', JSON.stringify(payload))
      commit('theme', payload)
    }
  },
  getters: {
    homeComponentName: state => {
      return state.homeComponentName
    },
    trainingComponentName: state => {
      return state.trainingComponentName
    },
    drawer: state => {
      return state.drawer
    },
    theme: state => {
      return state.theme
    }
  }
}
