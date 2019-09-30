<template lang="pug">
  v-container
      v-row
        v-col(cols="12", sm="6", offset-sm="3")
          stopwatch-app
        v-col(cols="12", sm="6", offset-sm="3")
          countdown-app
</template>

<script>
import stopwatch from '@/components/Stopwatch'
import countdown from '@/components/Countdown'

export default {
  components: {
    'stopwatch-app': stopwatch,
    'countdown-app': countdown
  }
}
</script>
