<template lang="pug">
  #home
    transition(name="slide", mode="out-in", appear)
      keep-alive
        component(:is="componentName")
</template>

<script>
import timeApp from '@/views/Time'
import configApp from '@/views/Config'

export default {
  components: {
    'time-app': timeApp,
    'config-app': configApp
  },
  data() {
    return {}
  },
  computed: {
    componentName() {
      return this.$store.getters.homeComponentName
    }
  },
  watch: {
    componentName() {
      return this.$store.getters.homeComponentName
    }
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.22s cubic-bezier(0.84, 0.01, 1, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(4px);
  opacity: 0;
}
</style>
