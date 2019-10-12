<template lang="pug">
  #button-rep
    v-row
      v-col(cols="12").pa-0
        v-hover(v-slot:default="{hover}")

          v-btn(fab, width="150", height="150", @click="setSeries", :elevation="hover ? 12 : 0").primary
            span.text-center.display-1.font-weight-bold {{seriesRemaining}}

      v-col(cols="12")
        v-hover(v-slot:default="{hover}")

          v-btn(@click="resetSeries", outlined, :elevation="hover ? 12 : 0")
            span.font-weight-normal reset-
            span.font-weight-light {{getConfig.series}}
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.seriesRemaining
  },
  methods: {
    setSeries() {
      if (this.seriesRemaining == 0 || this.countdownRunning) return
      if (this.getVibrate) window.navigator.vibrate(50)
      this.$emit('clickButtonSeries')
      if (this.getConfig.timer !== '00:00:00') {
        this.$store.dispatch('setCountdownRunning', true)
        this.$store.dispatch('saveCountdownRunning', true)
      }
      this.$store.dispatch('setSeries')
    },
    resetSeries() {
      this.$store.dispatch('setCountdownRunning', false)
      this.$store.dispatch('saveCountdownRunning', false)
      this.$store.dispatch('resetCountdown')
    }
  },
  computed: {
    getVibrate() {
      return this.$store.getters.vibrate
    },
    getConfig() {
      return this.$store.getters.config
    },
    seriesRemaining() {
      return this.$store.getters.appState.series
    },
    countdownRunning() {
      return this.$store.getters.countdownRunning
    }
  },
  watch: {
    seriesRemaining() {
      return this.$store.getters.appState.series
    }
  }
}
</script>
