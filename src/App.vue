<template lang="pug">
v-app
  navbar-app
  v-content(v-touch="{right: () => setDrawer(true)}")
    v-container(fluid)
      popups-app
      router-view
  footer-app
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Popups from '@/components/Popups'
import { mapActions } from 'vuex'

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
  }
}
</script>
