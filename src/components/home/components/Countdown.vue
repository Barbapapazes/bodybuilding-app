<template lang="pug">
v-card(elevation="0").background#countdown
  v-card-title
    v-row(no-gutters).pa-0

      v-col(cols="12", align="center").pa-0
        span.display-1.font-weight-light {{ getCountdown }}
  
  v-card-actions
    v-row()

      v-col(cols="12", align="center").pa-0
        v-btn(fab, width="150", height="150", elevation="0", @click="decreaseSeriesStart").primary.text-center.display-1.font-weight-bold
          transition(name="number", mode="out-in")
            span(:key="getSeriesRemaining") {{ getSeriesRemaining}}

      v-col(cols="12", align="center")
        v-btn(outlined, @click="reset(), setSeriesRemaining(getSeries)", :disabled="getFollowTraining")
          span.font-weight-normal reset
          span.font-weight-light {{ getSeries == '0' ? '' : '-' + getSeries }} 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  mounted() {
    const timeRemaining = Date.parse(new Date()) - Date.parse(this.getEnd)
    // check if the countdown is over
    if (this.getRunning && timeRemaining < 0) {
      this.start(new Date(this.getEnd))
    } else if (this.getRunning && timeRemaining >= 0) {
      this.setCountdown(this.getTime)
      this.setRunning(false)
    }
    window.addEventListener('blur', () => {
      if (Notification.permission === 'granted' && this.getRunning) {
        navigator.serviceWorker.ready.then(reg => {
          reg.active.postMessage({
            data: this.getEnd,
            type: 'EMIT_NOTIFICATION'
          })
        })
      }
    })
    window.addEventListener('focus', () => {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(reg => {
          reg.active.postMessage({ type: 'STOP_NOTIFICATION' })
        })
      }
    })
  },
  methods: {
    ...mapActions({
      setCountdown: 'countdown/countdown',
      setIntervalID: 'countdown/intervalID',
      setNow: 'countdown/now',
      setEnd: 'countdown/end',
      setRunning: 'countdown/running',
      setSeriesRemaining: 'countdown/series',
      setSeries: 'timeSeries/series',
      setSpliceSelectedTraining: 'trainings/spliceSelectedTraining'
    }),
    decreaseSeriesStart: function() {
      if (this.getSeriesRemaining == '0' || this.getRunning) {
        return
      } else if (!/^(0{2}:)?0{2}:0{2}$/gm.test(this.getCountdown)) {
        // if countdown > 00:00
        this.start()
      }
      this.setSeriesRemaining(String(this.getSeriesRemaining - 1))
    },
    start: function(value) {
      // set the end of the countdown
      if (value == undefined) {
        // if user press the button
        let endCountdown = new Date()
        const regexTime = /(\d{2}):(\d{2}):(\d{2})$/gm
        let time = '00:00:00'
        if (this.getFollowTraining) {
          time = this.getSelectedTraining.exercises[0].countdown
        } else {
          time = this.getTime
        }
        const groups = regexTime.exec(time)
        const match = groups.map(element => {
          if (element == undefined) element = 0
          return new Number(element)
        })

        endCountdown.setHours(endCountdown.getHours() + match[1])
        endCountdown.setMinutes(endCountdown.getMinutes() + match[2])
        endCountdown.setSeconds(endCountdown.getSeconds() + match[3])

        this.setEnd(endCountdown)
      } else {
        // if countdown was running in previous sesion and end time is > now, we set the previous end date as the actual date end
        this.setEnd(value)
      }

      this.setRunning(true)
      this.setIntervalID(setInterval(this.countdown, 200))
    },
    reset: function() {
      if (this.getIntervalID != undefined) {
        this.setIntervalID(clearInterval(this.getIntervalID))
      }
      this.setRunning(false)
      let time = '00:00:00'
      if (this.getFollowTraining) {
        time = this.getSelectedTraining.exercises[0].countdown
      } else {
        time = this.getTime
      }
      this.setCountdown(time)
      this.setEnd(null)
      this.setNow(null)
    },
    countdown: function() {
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

        if (Date.parse(deltaTime) < 0) {
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
    },
    setValueCountdown: function() {
      if (this.getSelectedTraining != undefined) {
        const series = this.getSelectedTraining.exercises[0].series
        const countdown = this.getSelectedTraining.exercises[0].countdown
        this.setSeriesRemaining(series)
        this.setSeries(series)
        this.setCountdown(countdown)
      } else {
        alert('Training finished')
      }
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
      getSeries: 'timeSeries/series',
      getFollowTraining: 'trainings/followTraining',
      getSelectedTraining: 'trainings/selectedTraining'
    })
  },
  watch: {
    getFollowTraining(a) {
      if (a && this.getSelectedTraining) {
        this.setValueCountdown()
      } else {
        this.reset()
      }
    },
    getSeriesRemaining(a) {
      if (a == 0 && this.getFollowTraining) {
        this.setSpliceSelectedTraining()
        this.setValueCountdown()
      }
    }
  }
}
</script>
