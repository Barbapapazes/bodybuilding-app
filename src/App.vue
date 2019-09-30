<template lang="pug">
  v-app
    navbar-app
    v-content
      v-container(fluid)
        router-view
</template>

<script>
import navbar from '@/components/Navbar'

export default {
  components: {
    'navbar-app': navbar
  },
  data() {
    return {}
  }
}
</script>
