<template lang="pug">
  v-card(elevation="0")#countdown.background
    v-card-title

      v-row(no-gutters).pa-0
        v-col(cols="12", align="center").pa-0

          span.display-1.font-weight-light {{ countdown }}

    v-card-actions

      v-row(no-gutters)
        v-col(cols="12", align="center")

          button-series-app(@clickButtonSeries="buttonSeries = true")
</template>

<script>
import buttonSeries from '@/components/ButtonSeries'

export default {
  components: {
    'button-series-app': buttonSeries
  },
  data() {
    return {
      buttonSeries: false,
      countdown: '',
      running: null,
      started: null,
      now: null,
      endTimer: null
    }
  },
  mounted() {
    this.countdown = this.getAppState.timer
  },
  methods: {
    start() {
      this.started = setInterval(this.timerRunning, 10)
    },
    reset() {
      clearInterval(this.started)
      this.now = null
      this.endTimer = null
      this.timeBegan = null
      this.countdown = this.getConfig.timer
      this.$store.dispatch('setCountdown', this.countdown)
    },
    timerRunning() {
      this.now = Math.trunc(Date.parse(new Date()) / 1000)
      const deltaTime = this.endTimer - this.now
      const hours = this.zeroPrefix(Math.trunc(deltaTime / 60 / 60) % 24, 2)
      const minutes = this.zeroPrefix(Math.trunc(deltaTime / 60) % 60, 2)
      const seconds = this.zeroPrefix(deltaTime % 60, 2)

      this.countdown = `${hours}:${minutes}:${seconds}`
      this.$store.dispatch('setCountdown', this.countdown)
      this.$store.dispatch('saveTime')
      if (Number(hours) == 0 && Number(minutes) == 0 && Number(seconds) < 0) {
        if (this.getVibrate) window.navigator.vibrate([300, 100, 500])
        this.$store.dispatch('setRunning', false)
        this.$store.dispatch('saveRunning', false)
      }
    },
    zeroPrefix: function(num, digit) {
      let zero = ''
      for (let index = 0; index < digit; index++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  },
  computed: {
    getConfig() {
      return this.$store.getters.config
    },
    getAppState() {
      return this.$store.getters.appState
    },
    getRunning() {
      return this.$store.getters.timerRunning
    },
    getVibrate() {
      return this.$store.getters.vibrate
    }
  },
  watch: {
    getAppState(a) {
      this.countdown = a.timer
    },
    getRunning(a) {
      if (!a) this.reset()
      else if (a && this.buttonSeries) {
        let endTimer = new Date()
        const regexTime = /(\d{2}):(\d{2}):(\d{2})$/gm
        const groups = regexTime.exec(this.getAppState.timer)
        const match = groups.map(element => new Number(element))

        endTimer.setHours(endTimer.getHours() + match[1])
        endTimer.setMinutes(endTimer.getMinutes() + match[2])
        endTimer.setSeconds(endTimer.getSeconds() + match[3])

        this.endTimer = Math.trunc(Date.parse(endTimer) / 1000)
        this.start()
        this.buttonSeries = false
      } else {
        let endTimer = new Date()
        const regexTime = /(\d{2}):(\d{2}):(\d{2})$/gm
        const groups = regexTime.exec(this.getAppState.timer)
        const match = groups.map(element => new Number(element))

        const oldTime = new Date(JSON.parse(this.$localStorage.get('time')))

        endTimer.setHours(oldTime.getHours() + match[1])
        endTimer.setMinutes(oldTime.getMinutes() + match[2])
        endTimer.setSeconds(oldTime.getSeconds() + match[3])

        if (endTimer > Date.parse(new Date())) {
          this.endTimer = Math.trunc(Date.parse(endTimer) / 1000)
          this.start()
        } else {
          this.reset()
        }
      }
    }
  }
}
</script>
