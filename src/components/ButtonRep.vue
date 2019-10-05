<template lang="pug">
  #button-rep
    v-btn(fab, width="150", height="150", @click="decreaseRep").primary
      span.text-center.display-1.font-weight-bold {{repRemaining}}
    v-btn(@click="resetRep")
      span reset
      span {{rep}}
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
    decreaseRep() {
      if (this.repRemaining == 0 || this.timerRunning) return
      this.$store.dispatch('decreaseRep')
      this.$store.dispatch('setRunning', true)
    },
    resetRep() {
      this.$store.dispatch('resetRep')
    }
  },
  computed: {
    repRemaining() {
      return this.$store.getters.repRemaining
    },
    timerRunning() {
      return this.$store.getters.timerRunning
    },
    rep() {
      return this.$store.getters.config.rep
    }
  },
  watch: {
    repRemaining() {
      return this.$store.getters.repRemaining
    }
  }
}
</script>
