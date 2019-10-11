<template lang="pug">
  v-container
    v-row
      v-col(cols="12").pa-0
        h2.text-capitalize.font-weight-light.secondary--text setup series &amp; time
      v-col(cols="12", sm="6", md="6", offset-sm="3", offset-md="3").pt-0
        time-series
</template>

<script>
import timeSeries from '@/components/TimeSeries'

export default {
  components: {
    'time-series': timeSeries
  }
}
</script>
