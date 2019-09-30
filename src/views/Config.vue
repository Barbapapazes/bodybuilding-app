<template lang="pug">
    v-row
      v-col(cols="12", md="6", offset-md="3")
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
