import Vue from 'vue'
import App from './App.vue'
import VueLocalStorage from 'vue-localstorage'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { mapActions } from 'vuex'

Vue.config.productionTip = false

Vue.use(VueLocalStorage)

new Vue({
  router,
  store,
  vuetify,
  created() {
    // get timeSaved before set the time because setTime save a new timeSaved
    const timeSaved = Vue.localStorage.get('timeSaved', '0')

    this.setTimeSaved(
      Date.parse(new Date()) +
        new Date().getMilliseconds() -
        JSON.parse(timeSaved)
    )

    // theme
    const theme = Vue.localStorage.get('theme', false)
    this.setTheme(JSON.parse(theme))

    // config
    const config = Vue.localStorage.get(
      'config',
      '{"time": "00:00:00", "series": "0", "apply": false}'
    )
    this.setConfig(JSON.parse(config))

    // time
    const time = Vue.localStorage.get('time', '00.00')
    this.setTime(time)

    // stopwatch running
    const stopwatchRunning = Vue.localStorage.get('stopwatchRunning', false)
    this.setStopwatchRunning(JSON.parse(stopwatchRunning))

    // countdown
    const countdown = Vue.localStorage.get('countdown', '00:00:00')
    this.setCountdown(countdown)

    // countdown running
    const countdownRunning = Vue.localStorage.get('countdownRunning', false)
    this.setCountdownRunning(JSON.parse(countdownRunning))

    // end countdown
    const endCountdown = Vue.localStorage.get('endCountdown', null)
    this.setEndCountdown(endCountdown)

    // series remaining
    const seriesRemaining = Vue.localStorage.get('seriesRemaining', 0)
    this.setSeriesCountdown(seriesRemaining)

    // trainings
    const trainings = Vue.localStorage.get('trainings', JSON.stringify([]))
    this.setTrainings(JSON.parse(trainings))

    // selected training
    const selectedTrainingName = Vue.localStorage.get(
      'selectedTrainingName',
      ''
    )
    this.setSelectedTrainingName(selectedTrainingName)

    // follow training
    const followTraining = Vue.localStorage.get(
      'followTraining',
      JSON.stringify(false)
    )
    this.setFollowTraining(JSON.parse(followTraining))
  },
  methods: {
    ...mapActions({
      setTheme: 'navbar/theme',
      setConfig: 'timeSeries/config',
      setTime: 'stopwatch/time',
      setStopwatchRunning: 'stopwatch/running',
      setTimeSaved: 'stopwatch/timeSaved',
      setCountdown: 'countdown/countdown',
      setCountdownRunning: 'countdown/running',
      setEndCountdown: 'countdown/end',
      setSeriesCountdown: 'countdown/series',
      setTrainings: 'trainings/uploadTrainings',
      setSelectedTrainingName: 'trainings/selectedTrainingName',
      setFollowTraining: 'trainings/followTraining'
    })
  },
  render: h => h(App)
}).$mount('#app')
