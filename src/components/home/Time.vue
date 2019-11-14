<template lang="pug">
#time
  v-container
    v-row

      v-col(cols="12", md="6", lg="4").pa-0

        v-col(cols="12")
          title-app stopwatch
        v-col(cols="12",align="center").pt-0
          stopwatch-app

      v-col(cols="12", md="6", lg="4").pa-0

        v-col(cols="12")
          title-app countdown
        v-col(cols="12",align="center").pt-0
          countdown-app
</template>

<script>
import Stopwatch from '@/components/home/components/Stopwatch'
import Countdown from '@/components/home/components/Countdown'
import TitleSlot from '@/components/TitleSlot'

export default {
  components: {
    'stopwatch-app': Stopwatch,
    'countdown-app': Countdown,
    'title-app': TitleSlot
  }
}
</script>