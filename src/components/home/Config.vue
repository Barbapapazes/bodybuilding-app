<template lang="pug">
#config
  v-container
    v-row(no-guetters)

      v-col(cols="12", md="6", lg="4").pa-0
      
        v-col(cols="12")
          h2.text-capitalize.font-weight-light.secondary--text setup series &amp; time
        v-col(cols="12")
          time-series-app
</template>

<script>
import TimeSeries from '@/components/home/components/TimeSeries'

export default {
  components: {
    'time-series-app': TimeSeries
  }
}
</script>