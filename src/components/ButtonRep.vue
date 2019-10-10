<template lang="pug">
  #button-rep
    v-row
      v-col(cols="12").pa-0
        v-hover(v-slot:default="{hover}")
          v-btn(fab, width="150", height="150", @click="setRep", :elevation="hover ? 12 : 0").primary
            span.text-center.display-1.font-weight-bold {{repRemaining}}
      v-col(cols="12")
        v-hover(v-slot:default="{hover}")
          v-btn(@click="resetRep", outlined, :elevation="hover ? 12 : 0")
            span.font-weight-normal reset-
            span.font-weight-light {{repConfig}}
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.repRemaining
  },
  methods: {
    setRep() {
      if (this.repRemaining == 0 || this.timerRunning) return
      if (this.allowVibrate) window.navigator.vibrate(50)
      this.$store.dispatch('setRep')
      if (this.timer !== '00:00:00') this.$store.dispatch('setRunning', true)
    },
    resetRep() {
      this.$store.dispatch('resetCountdown')
      this.$store.dispatch('setRunning', false)
    }
  },
  computed: {
    config() {
      return this.$store.getters.config
    },
    repRemaining() {
      return this.$store.getters.appState.rep
    },
    timerRunning() {
      return this.$store.getters.timerRunning
    },
    timer() {
      return this.$store.getters.config.timer
    },
    repConfig() {
      return this.$store.getters.config.rep
    },
    allowVibrate() {
      return this.$store.getters.allowVibrate
    }
  },
  watch: {
    repRemaining() {
      return this.$store.getters.appState.rep
    }
  }
}
</script>
