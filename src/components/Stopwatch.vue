<template lang="pug">

  v-card(elevation="0")#stopwatch.background
    v-card-title.pb-0
      v-row(no-gutters).pa-0
        v-col(cols="12", align="center").pa-0
          span.display-1.font-weight-light {{ time }}

    v-card-actions.pt-0
      v-row

        v-col(cols="6", md="4", offset-md="2", align="center", v-if="!getRunning")
          v-hover(v-slot:default="{hover}")
            v-btn(text, @click="running(true, true)", name="start", :elevation="hover ? 12 : 0").primary
              v-icon(left) mdi-play
              | start

        v-col(cols="6", md="4", offset-md="2", align="center", v-else)
          v-hover(v-slot:default="{hover}")
            v-btn(text, @click="running(false, true)", name="stop", :elevation="hover ? 12 : 0").primary
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
      timeSaved: 0,
      stoppedDuration: 0,
      started: null,
      buttonStopwatch: undefined
    }
  },
  methods: {
    running: function(running, startFromButton) {
      this.buttonStopwatch = startFromButton
      this.$store.dispatch('setStopwatchRunning', running)
      this.$store.dispatch('saveStopwatchRunning', running)
    },
    start: function() {
      if (this.timeBegan === null) {
        let timeBegan = new Date()
        this.timeBegan = timeBegan

        const regexTime = /(\d{2})?:?(\d{2})?:?(\d{2}).(\d{2})$/gm
        const groups = regexTime.exec(this.getAppState.stopwatch)

        const match = groups.map(element => {
          if (element == undefined) element = 0
          return new Number(element)
        })
        this.timeSaved +=
          match[1] * 3600000 + match[2] * 60000 + match[3] * 1000 + match[4]
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped
      }

      this.started = setInterval(this.clockRunning, 10)
    },
    stop: function() {
      this.timeStopped = new Date()
      clearInterval(this.started)
    },
    reset: function() {
      this.running(false, false)
      this.$store.dispatch('resetStopwatch')
      clearInterval(this.started)
      this.stoppedDuration = 0
      this.timeBegan = null
      this.timeStopped = null
      this.timeSaved = 0
      this.time = this.getAppState.stopwatch
    },
    clockRunning: function() {
      let currentTime = new Date(
          Date.parse(new Date()) + new Date().getMilliseconds() + this.timeSaved
        ),
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
      this.$store.dispatch('setStopwatch', this.time)
      this.$store.dispatch('saveAppState')
      this.$store.dispatch('saveTimeStopwatch')
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
    getRunning() {
      return this.$store.getters.stopwatchRunning
    },
    getAppState() {
      return this.$store.getters.appState
    }
  },
  watch: {
    getAppState(a) {
      this.time = a.stopwatch
    },
    getRunning(a) {
      if (!a && this.buttonStopwatch) {
        this.stop()
        this.buttonStopwatch = false
      } else if (a && this.buttonStopwatch) {
        this.start()
        this.buttonStopwatch = false
      } else if (a) {
        this.timeSaved =
          Date.parse(new Date()) +
          new Date().getMilliseconds() -
          JSON.parse(this.$localStorage.get('timeStopwatch'))
        this.start()
      }
    }
  }
}
</script>
