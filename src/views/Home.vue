<template lang="pug">
  #home
    v-container
      v-row
        v-col(cols="12", sm="6", offset-sm="3")
          stopwatch
</template>

<script>
import stopwatch from '@/components/Stopwatch'

export default {
  components: {
    stopwatch: stopwatch
  }
}
</script>
