<template lang="pug">
v-card#time-series
  v-card-text
    v-row

      v-col(cols="12")
        v-text-field(clearable, type="number", ref="series", :rules="seriesRules", @input="invalidValue(series)", v-model="series")
        p {{ series }}

      v-col(cols="12")
        v-time-picker(use-seconds, format="24hr", v-model="time")
        p {{ getTime }}
  v-card-actions
    v-btn(@click="setConfig()") ok
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      time: '00:00:00',
      series: '',
      seriesRules: [value => !!value || 'Required']
    }
  },
  methods: {
    ...mapActions({
      setTime: 'timeSeries/time',
      setCountdown: 'countdown/countdown',
      setRunningCountdown: 'countdown/running'
    }),
    setConfig: function() {
      this.setRunningCountdown(false)
      this.setTime(this.time)
      this.setCountdown(this.time)
    },
    invalidValue: function(num) {
      if (num < 1) {
        this.series = ''
        this.$refs.series.lazyValue = this.series
      }
    }
  },
  computed: {
    ...mapGetters({
      getTime: 'timeSeries/time'
    })
  }
}
</script>