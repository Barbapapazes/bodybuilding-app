import Vue from 'vue'
import Vuex from 'vuex'

import stopwatch from '@/store/home/stopwatch'
import countdown from '@/store/home/countdown'
import timeSeries from '@/store/home/timeSeries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    stopwatch: stopwatch,
    countdown: countdown,
    timeSeries: timeSeries
  }
})
