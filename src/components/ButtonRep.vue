<template lang="pug">
  #button-rep
    v-row
      v-col(cols="12").pa-0
        v-hover(v-slot:default="{hover}")
          v-btn(fab, width="150", height="150", @click="decreaseRep", :elevation="hover ? 12 : 0").primary
            span.text-center.display-1.font-weight-bold {{repRemaining}}
      v-col(cols="12")
        v-hover(v-slot:default="{hover}")
          v-btn(@click="resetRep", outlined, :elevation="hover ? 12 : 0")
            span.font-weight-normal reset-
            span.font-weight-light {{rep}}
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
      this.$store.dispatch('setRunning', false)
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
