<template lang="pug">
  #button-rep
    v-btn(fab, width="150px", height="150px", @click="decreaseRep") {{ rep }}
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
      this.$store.dispatch('decreaseRep')
    }
  },
  computed: {
    rep() {
      return this.$store.getters.config.rep
    }
  },
  watch: {
    rep() {
      return this.$store.getters.config.rep
    }
  }
}
</script>