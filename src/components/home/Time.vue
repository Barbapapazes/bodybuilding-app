<template lang="pug">
  #time
    v-row

      v-col(cols="12", md="6", xl="3")

        v-col(cols="12").px-0
          title-app stopwatch
        v-col(cols="12",align="center").pt-0
          stopwatch-app

      v-col(cols="12", md="6", xl="3")

        v-col(cols="12").px-0
          title-app countdown
        v-col(cols="12",align="center").pt-0
          countdown-app
        
      v-col(cols="12", md="12", xl="6")

        v-row
          v-col(cols="6")
            title-app training
          v-col(cols="6", align="end")
            choose-training-app
        v-row
          v-col(cols="12",align="center").pt-0
            training-app
</template>

<script>
import Stopwatch from '@/components/home/components/Stopwatch'
import Countdown from '@/components/home/components/Countdown'
import ShowTraning from '@/components/home/Training'
import ChooseTraining from '@/components/home/components/ChooseTraining'
import TitleSlot from '@/components/TitleSlot'

export default {
  components: {
    'stopwatch-app': Stopwatch,
    'countdown-app': Countdown,
    'title-app': TitleSlot,
    'training-app': ShowTraning,
    'choose-training-app': ChooseTraining
  }
}
</script>