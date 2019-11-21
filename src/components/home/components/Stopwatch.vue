<template lang="pug">
  v-card(elevation="0").background#stopwatch
    v-card-title.pb-0
      v-row(no-gutters).pa-0

        v-col(cols="12", align="center").pa-0
          span(key="time").display-1.font-weight-light  {{ getTime }}
    
    v-card-actions.pt-0
      v-row

        v-col(cols="6", md="4", offset-md="2", align="center")
          v-btn(text, @click="startStop()", ).primary
            transition(name="rotate-btn", mode="out-in")
              div(:key="btnStopwatch.icon")
                v-icon(left) {{btnStopwatch.icon}}
                span {{btnStopwatch.name}}

        v-col(cols="6", md="4", align="center")
          v-btn(text, @click="reset()").primary
            v-icon(left) {{ svgPath.mdiStop }}
            span reset
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mdiPlay, mdiPause, mdiStop } from '@mdi/js'
export default {
  data() {
    return {
      animation: true,
      svgPath: {
        mdiPlay,
        mdiPause,
        mdiStop
      }
    }
  },
  mounted() {
    if (this.getRunning) {
      this.start()
    } else {
      this.setTimeSaved(0)
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

      this.setInterval(setInterval(this.clock, 100))
    },
    stop: function() {
      this.setInterval(clearInterval(this.getInterval))
      this.setTimeStopped(new Date())
      this.setRunning(false)
    },
    reset: function() {
      this.setInterval(clearInterval(this.getInterval))
      this.setTime('00.00')
      this.setTimeBegan(null)
      this.setTimeStopped(null)
      this.setTimeSaved(0)
      this.setStopTime(0)
      this.setRunning(false)
    },
    clock: function() {
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
    },
    startStop() {
      if (!this.getRunning) {
        this.start()
      } else {
        this.stop()
      }
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
    }),
    btnStopwatch: function() {
      let btn = {}
      if (!this.getRunning) {
        btn.icon = this.svgPath.mdiPlay
        btn.name = 'start'
      } else {
        btn.icon = this.svgPath.mdiPause
        btn.name = 'pause'
      }
      return btn
    }
  }
}
</script>