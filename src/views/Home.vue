<template lang="pug">
  #home
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
