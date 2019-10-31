<template lang="pug">
#navigation-bar
  v-app-bar(app).background.lighten-1
    v-app-bar-nav-icon(@click.stop="setDrawer(!getDrawer)", left)

    v-toolbar-title
      v-btn(:to="{name: 'home'}", text, exact-active-class="home-title", large).text-uppercase
        span.font-weight-bold.secondary--text sport
        span.font-weight-thin companion

    v-spacer

    v-btn(outlined, @click="setHomeComponentName('time-app')",v-if="getHomeComponentName == 'config-app' && $route.fullPath == '/'").secondary--text time

    v-btn(outlined, @click="setHomeComponentName('config-app')",v-else-if="getHomeComponentName == 'time-app' && $route.fullPath == '/'").secondary--text config
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      setHomeComponentName: 'navbar/homeComponentName',
      setDrawer: 'navbar/drawer'
    })
  },
  computed: {
    ...mapGetters({
      getHomeComponentName: 'navbar/homeComponentName',
      getDrawer: 'navbar/drawer'
    })
  }
}
</script>

<style scoped>
.home-title::before {
  background-color: transparent !important;
}
</style>