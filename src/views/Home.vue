<template lang="pug">
  #home
    v-container
      v-row
        v-col(cols="12", sm="6", offset-sm="3")
          stopwatch
        v-col(cols="12", sm="6", offset-sm="3")
          countdown
</template>

<script>
import stopwatch from '@/components/Stopwatch'
import countdown from '@/components/Countdown'

export default {
  components: {
    stopwatch: stopwatch,
    countdown: countdown
  }
}
</script>
