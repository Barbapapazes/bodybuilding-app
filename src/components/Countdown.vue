<template lang="pug">
  v-card(elevation="0")#countdown.background
    v-card-title
      v-row(no-gutters).pa-0
        v-col(cols="12", align="center").pa-0
          span.display-1.font-weight-light {{ countdown }}
    v-card-actions
      v-row(no-gutters)
        v-col(cols="12", align="center")
          button-rep-app

</template>

<script>
import buttonRep from '@/components/ButtonRep'

export default {
  components: {
    'button-rep-app': buttonRep
  },
  data() {
    return {
      countdown: '',
      running: null,
      started: null,
      now: null,
      timeStopped: null,
      stoppedDuration: 0,
      endTimer: null
    }
  },
  mounted() {
    this.running = this.getRunning
  },
  created() {
    this.countdown = this.$store.getters.appState.timer
    console.log(this.countdown)
  },
  methods: {
    start: function() {
      if (this.now === null) {
        this.reset()
      }

      let endTimer = new Date(this.endTimer * 1000)
      if (this.timeStopped !== null) {
        this.stoppedDuration =
          Math.trunc(Date.parse(new Date()) / 1000) - this.timeStopped
      } else {
        endTimer = new Date()
        const regexTime = /(\d{2}):(\d{2}):(\d{2})$/gm
        const groups = regexTime.exec(this.timer)
        const match = groups.map(element => new Number(element))

        endTimer.setHours(endTimer.getHours() + match[1])
        endTimer.setMinutes(endTimer.getMinutes() + match[2])
        endTimer.setSeconds(endTimer.getSeconds() + match[3])
      }

      this.endTimer =
        Math.trunc(Date.parse(endTimer) / 1000) + this.stoppedDuration

      this.started = setInterval(this.timerRunning, 10)
      this.setRunning(true)
    },
    stop: function() {
      this.setRunning(false)
      this.timeStopped = Math.trunc(Date.parse(new Date()) / 1000)
      clearInterval(this.started)
    },
    reset: function() {
      this.setRunning(false)
      clearInterval(this.started)
      this.now = null
      this.endTimer = null
      this.stoppedDuration = 0
      this.timeBegan = null
      this.timeStopped = null
      this.countdown = this.timer
      this.$store.dispatch('setCountdown', this.countdown)
    },
    timerRunning: function() {
      this.now = Math.trunc(Date.parse(new Date()) / 1000)
      const deltaTime = this.endTimer - this.now
      const hours = this.zeroPrefix(Math.trunc(deltaTime / 60 / 60) % 24, 2)
      const minutes = this.zeroPrefix(Math.trunc(deltaTime / 60) % 60, 2)
      const seconds = this.zeroPrefix(deltaTime % 60, 2)

      this.countdown = `${hours}:${minutes}:${seconds}`
      this.$store.dispatch('setCountdown', this.countdown)
      if (hours == 0 && minutes == 0 && seconds <= 0) {
        if (this.allowVibrate) window.navigator.vibrate([300, 100, 500])
        this.reset()
      }
    },
    zeroPrefix: function(num, digit) {
      let zero = ''
      for (let index = 0; index < digit; index++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
    setRunning(state) {
      this.$store.dispatch('setRunning', state)
    }
  },
  computed: {
    timer() {
      return this.$store.getters.config.timer
    },
    getRunning() {
      return this.$store.getters.timerRunning
    },
    allowVibrate() {
      return this.$store.getters.allowVibrate
    },
    getTimeRemaining() {
      return this.$store.getters.appState.timer
    }
  },
  watch: {
    timer() {
      this.countdown = this.$store.getters.config.timer
      return this.$store.getters.config.timer
    },
    getTimeRemaining() {
      this.countdown = this.$store.getters.appState.timer
      return this.$store.getters.appState.timer
    },
    getRunning() {
      this.running = this.$store.getters.timerRunning
      if (!this.running) this.reset()
      if (this.running) this.start()
      return this.$store.getters.timerRunning
    }
  }
}
</script>
