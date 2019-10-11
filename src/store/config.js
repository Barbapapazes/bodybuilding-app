import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    config: {
      timer: '00:00:00',
      series: 0
    }
  },
  mutations: {
    setConfig(state, payload) {
      state.config = {
        series: String(payload.series),
        timer: String(payload.timer)
      }
    }
  },
  actions: {
    setConfig({ dispatch, commit, state }, payload) {
      if (state.config == payload) return
      if (payload.timer == '') payload.timer = '00:00:00'
      if (payload.series == '') payload.series = 0
      commit('setConfig', payload)
      dispatch('saveConfig')
    },
    saveConfig({ commit, state }, payload) {
      const config = state.config
      Vue.localStorage.set('config', JSON.stringify(config))
    }
  },
  getters: {
    config(state) {
      return state.config
    }
  }
}
