<template lang="pug">
  #button-rep
    v-btn(fab, width="150px", height="150px", @click="decreaseRep").primary.display-2.font-weight-light {{rep}}
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.rep
  },
  methods: {
    decreaseRep() {
      if (this.rep == 0 || this.timerRunning) return
      this.$store.dispatch('decreaseRep')
      this.$store.dispatch('setRunning', true)
    }
  },
  computed: {
    rep() {
      return this.$store.getters.config.rep
    },
    timerRunning() {
      return this.$store.getters.timerRunning
    }
  },
  watch: {
    rep() {
      return this.$store.getters.config.rep
    }
  }
}
</script>
