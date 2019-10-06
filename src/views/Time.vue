<template lang="pug">
  v-container
    v-row
      v-col(cols="12", sm="6", lg="4",align="center")
        stopwatch-app
      v-col(cols="12", sm="6", lg="4",align="center")
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
