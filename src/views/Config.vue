<template lang="pug">
  v-container
    v-row
      v-col(cols="12", sm="6", md="6", offset-sm="3", offset-md="3")
        time-rep
</template>

<script>
import timeRep from '@/components/TimeRep'

export default {
  components: {
    'time-rep': timeRep
  },
  data() {
    return {}
  }
}
</script>
