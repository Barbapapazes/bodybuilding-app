<template lang="pug">
#training
  v-container
    v-row
      v-col(cols="12")
        title-app training
      v-col(cols="12")
        transition(name="slide-up", mode="out-in", appear)
          components(:is="getTrainingComponentName")
</template>

<script>
import TablesTraining from '@/components/training/TablesTraining'
import CreationTraining from '@/components/training/CreationTraining'
import TitleSlot from '@/components/TitleSlot'
import { mapGetters } from 'vuex'

export default {
  components: {
    'tables-training-app': TablesTraining,
    'creation-training-app': CreationTraining,
    'title-app': TitleSlot
  },
  computed: {
    ...mapGetters({
      getTrainingComponentName: 'navbar/trainingComponentName'
    })
  }
}
</script>