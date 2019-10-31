<template lang="pug">
v-card(elevation="0").background#time-series
  v-card-text
    v-row(no-gutters)

      v-col(cols="12", align="center")
        v-form(ref="form")
          v-text-field(clearable, type="number", ref="series", :rules="seriesRules", @input="invalidValue(series)", :disabled="getApply", required, v-model="series")

          v-time-picker(use-seconds, format="24hr", :disabled="getApply", :allowed-seconds="allowedStep", v-model="time")

  v-card-actions
    v-spacer
    v-btn(elevation="0", @click="setConfig()").primary {{getApply ? "edit": "apply"}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      time: '00:00:00',
      series: '',
      seriesRules: [value => !!value || 'Required'],
      allowedStep: s => s % 5 === 0
    }
  },
  methods: {
    ...mapActions({
      setTime: 'timeSeries/time',
      setSeries: 'timeSeries/series',
      setApply: 'timeSeries/apply',
      setCountdown: 'countdown/countdown',
      setRunningCountdown: 'countdown/running',
      setSeriesCountdown: 'countdown/series'
    }),
    setConfig: function() {
      if (this.getApply || !this.$refs.form.validate()) {
        this.setApply(false)
      } else {
        this.setApply(true)
        this.setRunningCountdown(false)
        this.setTime(this.time)
        this.setSeries(this.series)
        this.setCountdown(this.time)
        this.setSeriesCountdown(this.series)
      }
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
      getTime: 'timeSeries/time',
      getSeries: 'timeSeries/series',
      getApply: 'timeSeries/apply'
    })
  }
}
</script>

<style>
.v-picker {
  box-shadow: none;
}
</style>