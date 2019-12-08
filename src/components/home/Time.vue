<template lang="pug">
  #time
    v-row

      v-col(cols="12", md="6", xl="3").py-0
        v-row
          v-col(cols="12").py-0
            title-app stopwatch
        v-row
          v-col(cols="12",align="center")
            stopwatch-app

      v-col(cols="12", md="6", xl="3").py-0
        v-row
          v-col(cols="12").py-0
            title-app countdown
        v-row
          v-col(cols="12", align="center")
            countdown-app
        
      v-col(cols="12", md="12", xl="6").py-0

        v-row(align="start")
          v-col(cols="5").py-0
            title-app training
          v-col(cols="7", align="end").py-0
            choose-training-app
        v-row
          v-col(cols="12",align="center").py-0
            training-app.pt-4
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