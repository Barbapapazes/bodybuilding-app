import Vue from 'vue'
import Vuex from 'vuex'

import stopwatch from '@/store/Home/stopwatch'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    stopwatch: stopwatch
  }
})
