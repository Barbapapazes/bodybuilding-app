<template lang="pug">
v-card(elevation="0").background#countdown
  v-card-title
    v-row(no-gutters).pa-0

      v-col(cols="12", align="center").pa-0
        span.display-1.font-weight-light {{ getCountdown }}
  
  v-card-actions
    v-row(no-gutters)

      v-col(cols="12", align="center", v-if="getIntervalID == undefined")
        v-btn(@click="start()")
          span start

      v-col(cols="12", align="center", v-else)
        v-btn(@click="reset()")
          span reset         
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
      setRunning: 'countdown/running'
    }),
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

      this.setIntervalID(clearInterval(this.getIntervalID))
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
      getTime: 'timeSeries/time'
    })
  }
}
</script>