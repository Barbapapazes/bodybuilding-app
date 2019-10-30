<template lang="pug">
#home
  stopwatch-app
</template>

<script>
import Stopwatch from '@/components/Home/Stopwatch'

export default {
  components: {
    'stopwatch-app': Stopwatch
  }
}
</script>