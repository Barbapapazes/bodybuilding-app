<template lang="pug">
#training
  v-row()
    v-col(cols="12", md="8", offset-md="2")
      transition(name="slide-up", mode="out-in", appear)
        components(:is="getTrainingComponentName")
</template>

<script>
import TablesTraining from '@/components/training/TablesTraining'
import CreationTraining from '@/components/training/CreationTraining'
import { mapGetters } from 'vuex'

export default {
  components: {
    'tables-training-app': TablesTraining,
    'creation-training-app': CreationTraining
  },
  computed: {
    ...mapGetters({
      getTrainingComponentName: 'navbar/trainingComponentName'
    })
  }
}
</script>