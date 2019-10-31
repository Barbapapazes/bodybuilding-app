<template lang="pug">
#home
  stopwatch-app
  countdown-app
  time-series-app
</template>

<script>
import Stopwatch from '@/components/home/components/Stopwatch'
import Countdown from '@/components/home/components/Countdown'
import TimeSeries from '@/components/home/components/TimeSeries'

export default {
  components: {
    'stopwatch-app': Stopwatch,
    'countdown-app': Countdown,
    'time-series-app': TimeSeries
  }
}
</script>