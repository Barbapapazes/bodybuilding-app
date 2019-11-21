<template lang="pug">
v-app(:style="{background: $vuetify.theme.themes[getTheme ? 'dark': 'light'].background}")
  navbar-app
  v-content(v-touch="{right: () => setDrawer(true)}")
    v-container(fluid)
      popups-app
      transition(name="fade", mode="out-in", appear)
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.26s cubic-bezier(0.84, 0.01, 1, 1);
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(6px);
  opacity: 0;
}
.slide-x-enter-active,
.slide-x-leave-active {
  transition: all 0.4s cubic-bezier(0.08, 0.24, 0, 0.72);
}
.slide-x-enter,
.slide-x-leave-to {
  transform: translateX(-4px);
  opacity: 0;
}
.rotate-btn-enter-active {
  transition: all 0.1s ease-out;
}
.rotate-btn-leave-active {
  transition: all 0.1s ease-out;
}
.rotate-btn-enter {
  transform: rotateX(90deg);
}
.rotate-btn-leave-to {
  transform: rotateX(-90deg);
}
.rotate-enter-active {
  transition: all 0ms;
}
.rotate-leave-active {
  transition: all 0.4s ease-out;
}
.rotate-enter {
  display: none;
}
.rotate-leave-to {
  transform: rotateX(180deg);
}
</style>
