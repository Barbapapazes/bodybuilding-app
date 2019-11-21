<template lang="pug">
#show-training
  v-row
    v-col(cols="12", align="center").pa-0
      show-training-app
</template>

<script>
import ShowTraining from '@/components/home/components/ShowTraining'

export default {
  components: {
    'show-training-app': ShowTraining
  }
}
</script>