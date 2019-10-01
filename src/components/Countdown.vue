<template lang="pug">
  v-card#countdown
    v-card-title
      v-row(no-gutters).pa-0
        v-col(cols="12", align="center").pa-0
          span.display-1.font-weight-light {{ remainingTime }}

    v-card-actions
      v-row

        v-col(cols="6", md="4", offset-md="2", align="center", v-if="!running")
          v-btn(text, @click="start", name="start").primary
            v-icon(left) mdi-play
            | start

        v-col(cols="6", md="4", offset-md="2", align="center", v-else)
          v-btn(text, @click="stop", name="stop").primary
            v-icon(left) mdi-pause
            | stop

        v-col(cols="6", md="4", align="center")
          v-btn(text, @click="reset", name="reset").primary
            v-icon(left) mdi-stop
            | reset
</template>

<script>
export default {
  data() {
    return {
      remainingTime: '',
      started: null,
      running: false,
      now: null,
      timeStopped: null,
      stoppedDuration: 0,
      endTimer: null
    }
  },
  mounted() {
    this.remainingTime = this.timer
  },
  methods: {
    start: function() {
      if (this.running) return

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
      this.running = true
    },
    stop: function() {
      this.running = false
      this.timeStopped = Math.trunc(Date.parse(new Date()) / 1000)
      clearInterval(this.started)
    },
    reset: function() {
      this.running = false
      clearInterval(this.started)
      this.now = null
      this.endTimer = null
      this.stoppedDuration = 0
      this.timeBegan = null
      this.timeStopped = null
      this.remainingTime = this.timer
    },
    timerRunning: function() {
      this.now = Math.trunc(Date.parse(new Date()) / 1000)
      const deltaTime = this.endTimer - this.now
      const hours = this.zeroPrefix(Math.trunc(deltaTime / 60 / 60) % 24, 2)
      const minutes = this.zeroPrefix(Math.trunc(deltaTime / 60) % 60, 2)
      const seconds = this.zeroPrefix(deltaTime % 60, 2)

      this.remainingTime = `${hours}:${minutes}:${seconds}`
      if (hours == 0 && minutes == 0 && seconds <= 0) this.reset()
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
    timer() {
      return this.$store.getters.config.timer
    }
  },
  watch: {
    timer() {
      this.remainingTime = this.$store.getters.config.timer
      return this.$store.getters.config.timer
    }
  }
}
</script>
