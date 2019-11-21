<template lang="pug">
  #config
    v-row(no-guetters)

      v-col(cols="12", md="6", lg="4", offset-md="3", offset-lg="4").py-0
      
        v-col(cols="12", align="start").pa-0
          title-app setup series &amp; time
        v-col(cols="12", align="center").pt-0
          time-series-app
</template>

<script>
import TimeSeries from '@/components/home/components/TimeSeries'
import TitleSlot from '@/components/TitleSlot'

export default {
  components: {
    'time-series-app': TimeSeries,
    'title-app': TitleSlot
  }
}
</script>