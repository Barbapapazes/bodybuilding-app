<template lang="pug">
#home
  stopwatch-app
  countdown-app
</template>

<script>
import Stopwatch from '@/components/Home/Stopwatch'
import Countdown from '@/components/Home/Countdown'

export default {
  components: {
    'stopwatch-app': Stopwatch,
    'countdown-app': Countdown
  }
}
</script>