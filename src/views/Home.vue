<template lang="pug">
#home
  transition(name="slide-up", mode="out-in", appear)
    keep-alive
      components(:is="getHomeComponentName")
</template>

<script>
import Time from '@/components/home/Time'
import Config from '@/components/home/Config'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'time-app': Time,
    'config-app': Config
  },
  methods: {
    ...mapActions({
      setStopwatchInterval: 'stopwatch/intervalID',
      setCountdownInterval: 'countdown/intervalID'
    })
  },

  computed: {
    ...mapGetters({
      getHomeComponentName: 'navbar/homeComponentName',
      getStopwatchInterval: 'stopwatch/intervalID',
      getCountdownInterval: 'countdown/intervalID'
    })
  },
  beforeRouteLeave: function(to, from, next) {
    console.log('leave home')
    this.setStopwatchInterval(clearInterval(this.getStopwatchInterval))
    next()
    this.setCountdownInterval(clearInterval(this.getCountdownInterval))
    next()
  }
}
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.26s cubic-bezier(0.84, 0.01, 1, 1);
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(6px);
  opacity: 0;
}
</style>