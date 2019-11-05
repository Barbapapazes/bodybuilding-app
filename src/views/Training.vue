<template lang="pug">
#training
  v-container
    h1 training
    creation-training-app

</template>

<script>
import CreationTraining from '@/components/training/CreationTraining'

export default {
  components: {
    'creation-training-app': CreationTraining
  }
}
</script>