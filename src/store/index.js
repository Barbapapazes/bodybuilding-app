import Vue from 'vue'
import Vuex from 'vuex'

import stopwatch from '@/store/Home/stopwatch'
import countdown from '@/store/Home/countdown'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    stopwatch: stopwatch,
    countdown: countdown
  }
})
