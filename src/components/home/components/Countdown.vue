<template lang="pug">
v-card(elevation="0").background#countdown
  v-card-title
    v-row(no-gutters).pa-0

      v-col(cols="12", align="center").pa-0
        span.display-1.font-weight-light {{ getCountdown }}
  
  v-card-actions
    v-row()

      v-col(cols="12", align="center").pa-0
        v-btn(fab, width="150", height="150", elevation="0", @click="decreaseSeriesStart").primary
          span.text-center.display-1.font-weight-bold {{ getSeriesRemaining}}

      v-col(cols="12", align="center")
        v-btn(outlined, @click="reset(), setSeriesRemaining(getSeries)")
          span.font-weight-normal reset
          span.font-weight-light {{ getSeries == '0' ? '' : '-' + getSeries }} 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      setCountdown: 'countdown/countdown',
      setIntervalID: 'countdown/intervalID',
      setNow: 'countdown/now',
      setEnd: 'countdown/end',
      setRunning: 'countdown/running',
      setSeriesRemaining: 'countdown/series'
    }),
    decreaseSeriesStart: function() {
      if (this.getSeriesRemaining === '0' || this.getRunning) {
        console.log('return')
        return
      } else if (!/^(0{2}:)?0{2}:0{2}$/gm.test(this.getCountdown)) {
        // if countdown > 00:00
        console.log('start')
        this.start()
      }
      this.setSeriesRemaining(String(this.getSeriesRemaining - 1))
    },
    start: function() {
      console.log('start')

      // set the end of the countdown
      let endCountdown = new Date()
      const regexTime = /(\d{2}):(\d{2}):(\d{2})$/gm
      const groups = regexTime.exec(this.getTime)
      const match = groups.map(element => {
        if (element == undefined) element = 0
        return new Number(element)
      })

      endCountdown.setHours(endCountdown.getHours() + match[1])
      endCountdown.setMinutes(endCountdown.getMinutes() + match[2])
      endCountdown.setSeconds(endCountdown.getSeconds() + match[3])

      this.setEnd(endCountdown)

      this.setRunning(true)
      this.setIntervalID(setInterval(this.countdown, 200))
    },
    reset: function() {
      console.log('reset')

      if (this.getIntervalID != undefined) {
        this.setIntervalID(clearInterval(this.getIntervalID))
      }
      this.setRunning(false)
      this.setCountdown(this.getTime)
      this.setEnd(null)
      this.setNow(null)
    },
    countdown: function() {
      console.log('countdown')

      if (!this.getRunning) {
        this.reset()
      } else {
        this.setNow(new Date())
        const deltaTime = new Date(this.getEnd - this.getNow),
          hour = deltaTime.getUTCHours(),
          min = deltaTime.getUTCMinutes(),
          sec = deltaTime.getUTCSeconds()

        const time =
          this.zeroPrefix(hour, 2) +
          ':' +
          this.zeroPrefix(min, 2) +
          ':' +
          this.zeroPrefix(sec, 2)

        if (hour == 0 && min == 0 && sec == 0) {
          this.reset()
        } else {
          this.setCountdown(time)
        }
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
    ...mapGetters({
      getCountdown: 'countdown/countdown',
      getIntervalID: 'countdown/intervalID',
      getNow: 'countdown/now',
      getEnd: 'countdown/end',
      getRunning: 'countdown/running',
      getSeriesRemaining: 'countdown/series',
      getTime: 'timeSeries/time',
      getSeries: 'timeSeries/series'
    })
  }
}
</script>