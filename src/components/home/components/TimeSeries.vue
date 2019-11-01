<template lang="pug">
v-card(elevation="0").background#time-series
  v-card-text
    v-row(no-gutters)

      v-col(cols="12", align="center")
        v-form(ref="form")
          v-text-field(clearable, type="number", ref="series", :rules="seriesRules", @input="invalidValue(series)", :disabled="getApply", required, v-model="series").mb-2

          v-time-picker(use-seconds, format="24hr", scrollable, color="primary",:disabled="getApply", :allowed-seconds="allowedStep", v-model="time")

  v-card-actions
    v-spacer
    v-btn(depressed, @click="applyConfig()").primary {{getApply ? "edit": "apply"}}
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
  mounted() {
    this.time = this.getTime
    this.series = this.getSeries
  },
  methods: {
    ...mapActions({
      setConfig: 'timeSeries/config',
      setCountdown: 'countdown/countdown',
      setRunningCountdown: 'countdown/running',
      setSeriesCountdown: 'countdown/series'
    }),
    applyConfig: function() {
      if (!this.$refs.form.validate()) {
        const config = {
          time: '00:00:00',
          series: 0,
          apply: false
        }
        this.setConfig(config)
      } else if (this.getApply) {
        const config = {
          time: this.time,
          series: this.series,
          apply: false
        }
        this.setConfig(config)
      } else {
        const config = {
          time: this.time,
          series: this.series,
          apply: true
        }
        this.setConfig(config)
        this.setRunningCountdown(false)
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