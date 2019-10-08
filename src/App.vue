<template lang="pug">
  v-app(:style="{background: $vuetify.theme.themes[theme].background}")
    navbar-app
    v-content
      v-container(fluid)
        transition(name="fade", mode="out-in", appear)
          router-view
    footer-app
</template>

<script>
import navbar from '@/components/Navbar'
import footer from '@/components/Footer'

export default {
  components: {
    'navbar-app': navbar,
    'footer-app': footer
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.22s cubic-bezier(0.84, 0.01, 1, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
