<template lang="pug">
#home
  transition(name="slide-up", mode="out-in", appear)
    keep-alive
      components(:is="'time-app'")
  keep-alive
      components(:is="'config-app'")
</template>

<script>
import Time from '@/components/home/Time'
import Config from '@/components/home/Config'

export default {
  components: {
    'time-app': Time,
    'config-app': Config
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