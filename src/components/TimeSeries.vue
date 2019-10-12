<template lang="pug">
  v-card(elevation="0").background#time-series

    v-card-text
      v-row(no-gutters)
        v-col(cols="12", md="6", offset-md="3")

          v-text-field(clearable, label="Series", type="number", name="series", v-model="series", :disabled="apply", :rules="seriesRules", ref="series", @input="invalidValue(series)" @keyup.enter="setConfig")

        v-col(cols="12", md="10", offset-md="1", align="center")

          v-time-picker(use-seconds, format="24hr", scrollable, :allowed-seconds="allowedStep", v-model='time', :disabled="apply" color='primary')

    v-card-actions
      v-hover(v-slot:default="{hover}")
        v-btn(@click="setConfig", :disabled="validData", :elevation="hover ? 12 : 0").primary {{apply ? "edit": "apply"}}
</template>

<script>
export default {
  data() {
    return {
      series: '',
      time: '',
      apply: false,
      validData: true,
      seriesRules: [value => !!value || 'Required'],
      allowedStep: s => s % 5 === 0
    }
  },
  mounted() {
    const config = this.getConfig
    if (config.series == 0) return
    this.series = config.series
    this.time = config.timer
    this.apply = true
  },
  methods: {
    setConfig() {
      if (this.apply == true || !this.$refs.series.validate()) {
        this.apply = false
        return
      }
      this.apply = true
      const config = {
        series: this.series,
        timer: this.time,
        stopwatch: this.getStopwatch
      }
      this.$store.dispatch('setCountdownRunning', false)
      this.$store.dispatch('setConfig', config)
      this.$store.dispatch('setAppState', config)
    },
    invalidValue(value) {
      if (value < 1) {
        this.series = ''
        this.$refs.series.lazyValue = this.series
      }
    }
  },
  computed: {
    getConfig() {
      return this.$store.getters.config
    },
    getStopwatch() {
      return this.$store.getters.appState.stopwatch
    }
  },
  watch: {
    series(a) {
      if (Number.isInteger(Number(a))) {
        this.validData = false
      }
    }
  }
}
</script>

<style>
.v-picker {
  box-shadow: none;
}
</style>
