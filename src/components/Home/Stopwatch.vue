<template lang="pug">
  v-card#stopwatch
    v-card-title
      v-row

        v-col(cols="12")
          span  {{ getTime }}
    
    v-card-actions
      v-row

        v-col(cols="6", v-if="getInterval == undefined")
          v-btn(@click="start()")
            span start

        v-col(cols="6", v-else)
          v-btn(@click="stop()")
            span stop

        v-col(cols="6")
          v-btn(@click="reset()")
            span reset
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  mounted() {
    if (this.getRunning) {
      this.start()
    }
  },
  methods: {
    ...mapActions({
      setTime: 'stopwatch/time',
      setTimeBegan: 'stopwatch/timeBegan',
      setTimeStopped: 'stopwatch/timeStopped',
      setTimeSaved: 'stopwatch/timeSaved',
      setStopTime: 'stopwatch/stopTime',
      setInterval: 'stopwatch/intervalID',
      setRunning: 'stopwatch/running'
    }),
    start: function() {
      console.log('start')

      this.setRunning(true)

      // add the time from previous session to the stopwatch
      if (this.getTimeBegan === null) {
        this.setTimeBegan(new Date())

        const regexTime = /(\d{2})?:?(\d{2})?:?(\d{2}).(\d{2})$/gm
        const groups = regexTime.exec(this.getTime)

        const match = groups.map(element => {
          if (element == undefined) {
            element = 0
          }
          return new Number(element)
        })
        this.setTimeSaved(
          this.getTimeSaved +
            match[1] * 3600000 +
            match[2] * 60000 +
            match[3] * 1000 +
            match[4]
        )
      }

      // if there is a time the stopwatch was stoppped, we get the stoptime, between now and the time stopped
      if (this.getTimeStopped !== null) {
        this.setStopTime(this.getStopTime + (new Date() - this.getTimeStopped))
      }

      this.setInterval(setInterval(this.clock, 1000))
    },
    stop: function() {
      console.log('stop')

      this.setInterval(clearInterval(this.getInterval))
      this.setTimeStopped(new Date())
      this.setRunning(false)
    },
    reset: function() {
      console.log('reset')

      this.setInterval(clearInterval(this.getInterval))
      this.setTime('00:00')
      this.setTimeBegan(null)
      this.setTimeStopped(null)
      this.setTimeSaved(0)
      this.setStopTime(0)
      this.setRunning(false)
    },
    clock: function() {
      console.log('clock')

      let currentTime = new Date(
          Date.parse(new Date()) +
            new Date().getUTCMilliseconds() +
            this.getTimeSaved
        ),
        timeElapsed = new Date(
          currentTime - this.getTimeBegan - this.getStopTime
        ),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds()

      const time =
        (this.zeroPrefix(hour, 2) == 0 ? '' : this.zeroPrefix(hour, 2) + ':') +
        (this.zeroPrefix(min, 2) == 0 ? '' : this.zeroPrefix(min, 2) + ':') +
        this.zeroPrefix(sec, 2) +
        '.' +
        this.zeroPrefix(ms, 3).slice(0, 2)

      this.setTime(time)
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
    ...mapGetters({
      getTime: 'stopwatch/time',
      getTimeBegan: 'stopwatch/timeBegan',
      getTimeStopped: 'stopwatch/timeStopped',
      getTimeSaved: 'stopwatch/timeSaved',
      getStopTime: 'stopwatch/stopTime',
      getInterval: 'stopwatch/intervalID',
      getRunning: 'stopwatch/running'
    })
  }
}
</script>