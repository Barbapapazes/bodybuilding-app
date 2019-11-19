<template lang="pug">
#config
  v-container
    v-row(no-guetters)

      v-col(cols="12", md="6", lg="4", offset-md="3", offset-lg="4").pa-0
      
        v-col(cols="12", align="start")
          title-app setup series &amp; time
        v-col(cols="12", align="center")
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