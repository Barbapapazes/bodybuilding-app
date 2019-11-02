<template lang="pug">
v-app(:style="{background: $vuetify.theme.themes[getTheme ? 'dark': 'light'].background}")
  navbar-app
  v-content(v-touch="{right: () => setDrawer(true)}")
    v-container(fluid)
      popups-app
      transition(name="fade", mode="out-in")
        router-view
  footer-app
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Popups from '@/components/Popups'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    'navbar-app': Navbar,
    'footer-app': Footer,
    'popups-app': Popups
  },
  methods: {
    ...mapActions({
      setDrawer: 'navbar/drawer'
    })
  },
  computed: {
    ...mapGetters({
      getTheme: 'navbar/theme'
    })
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
