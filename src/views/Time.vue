<template lang="pug">
  v-container
    v-row
      v-col(cols="12").pa-0
        h2.text-capitalize.font-weight-light.secondary--text stopwatch
      v-col(cols="12", sm="6", lg="4",align="center").pt-0
        stopwatch-app
      v-col(cols="12").pa-0.mt-4
        h2.text-capitalize.font-weight-light.secondary--text countdown	&amp; rep
      v-col(cols="12", sm="6", lg="4",align="center").pt-0
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
