import Vue from 'vue'
import Vuex from 'vuex'

import stopwatch from '@/store/home/stopwatch'
import countdown from '@/store/home/countdown'
import timeSeries from '@/store/home/timeSeries'

import navbar from '@/store/shell/navbar'
import popups from '@/store/shell/popups'

import trainings from '@/store/training/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    stopwatch: stopwatch,
    countdown: countdown,
    timeSeries: timeSeries,
    navbar: navbar,
    popups: popups,
    trainings: trainings
  }
})
