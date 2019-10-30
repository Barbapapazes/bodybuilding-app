<template lang="pug">
v-app
  navbar-app
  v-content
    v-container(fluid)
      router-view
  footer-app
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    'navbar-app': Navbar,
    'footer-app': Footer
  }
}
</script>
