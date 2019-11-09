<template lang="pug">
#training
  v-container
    h1 training
    creation-training-app
    tables-training-app
</template>

<script>
import TablesTraining from '@/components/training/TablesTraining'
import CreationTraining from '@/components/training/CreationTraining'

export default {
  components: {
    'tables-training-app': TablesTraining,
    'creation-training-app': CreationTraining
  }
}
</script>