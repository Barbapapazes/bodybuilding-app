<template lang="pug">
  v-app(:style="{background: $vuetify.theme.themes[theme].background}")
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
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>
