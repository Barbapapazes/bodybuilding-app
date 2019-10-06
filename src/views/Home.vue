<template lang="pug">
  #home
    transition(name="fade", mode="out-in", appear)
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.22s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(4px);
  opacity: 0;
}
</style>
