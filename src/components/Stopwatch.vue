<template lang="pug">

  v-card(elevation="0")#stopwatch.background.lighten-2
    v-card-title.pb-0
      v-row(no-gutters).pa-0
        v-col(cols="12", align="center").pa-0
          span.display-1.font-weight-light {{ time }}

    v-card-actions.pt-0
      v-row

        v-col(cols="6", md="4", offset-md="2", align="center", v-if="!running")
          v-hover(v-slot:default="{hover}")
            v-btn(text, @click="start", name="start", :elevation="hover ? 12 : 0").primary
              v-icon(left) mdi-play
              | start

        v-col(cols="6", md="4", offset-md="2", align="center", v-else)
          v-hover(v-slot:default="{hover}")
            v-btn(text, @click="stop", name="stop", :elevation="hover ? 12 : 0").primary
              v-icon(left) mdi-pause
              | stop

        v-col(cols="6", md="4", align="center")
          v-hover(v-slot:default="{hover}")
            v-btn(text, @click="reset", name="reset", :elevation="hover ? 12 : 0").primary
              v-icon(left) mdi-stop
              | reset
</template>

<script>
export default {
  data() {
    return {
      time: '00.00',
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false
    }
  },
  methods: {
    start: function() {
      if (this.running) return

      if (this.timeBegan === null) {
        this.reset()
        this.timeBegan = new Date()
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped
      }

      this.started = setInterval(this.clockRunning, 10)
      this.running = true
    },
    stop: function() {
      this.running = false
      this.timeStopped = new Date()
      clearInterval(this.started)
    },
    reset: function() {
      this.running = false
      clearInterval(this.started)
      this.stoppedDuration = 0
      this.timeBegan = null
      this.timeStopped = null
      this.time = '00.00'
    },
    clockRunning: function() {
      let currentTime = new Date(),
        timeElapsed = new Date(
          currentTime - this.timeBegan - this.stoppedDuration
        ),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds()
      this.time =
        (this.zeroPrefix(hour, 2) == 0 ? '' : this.zeroPrefix(hour, 2) + ':') +
        (this.zeroPrefix(min, 2) == 0 ? '' : this.zeroPrefix(min, 2) + ':') +
        this.zeroPrefix(sec, 2) +
        '.' +
        this.zeroPrefix(ms, 3).slice(0, 2)
    },
    zeroPrefix: function(num, digit) {
      let zero = ''
      for (let index = 0; index < digit; index++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>
