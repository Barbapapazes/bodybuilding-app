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

      this.setEnd(
        new Date(new Date().setUTCSeconds(new Date().getUTCSeconds() + 5))
      )
      this.setRunning(true)
      this.setIntervalID(setInterval(this.countdown, 1000))
    },
    reset: function() {
      console.log('reset')

      this.setIntervalID(clearInterval(this.getIntervalID))
      this.setRunning(false)
      this.setCountdown('00:00')
      this.setEnd(null)
      this.setNow(null)
    },
    countdown: function() {
      console.log('countdown')

      this.setNow(new Date())
      const deltaTime = new Date(this.getEnd - this.getNow),
        hour = deltaTime.getUTCHours(),
        min = deltaTime.getUTCMinutes(),
        sec = deltaTime.getUTCSeconds()

      const time =
        (this.zeroPrefix(hour, 2) == 0 ? '' : this.zeroPrefix(hour, 2) + ':') +
        this.zeroPrefix(min, 2) +
        ':' +
        this.zeroPrefix(sec, 2)

      if (hour == 0 && min == 0 && sec == 0) {
        this.reset()
      } else {
        this.setCountdown(time)
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
      getRunning: 'countdown/running'
    })
  }
}
</script>