<template lang="pug">
#navigation-bar
  v-app-bar(app, flat).background.lighten-1
    v-app-bar-nav-icon(@click.stop="setDrawer(!getDrawer)", left)

    v-toolbar-title
      v-btn(to="/", text, exact-active-class="home-title", large).text-uppercase
        span.font-weight-bold.secondary--text sport
        span.font-weight-thin companion

    v-spacer

    transition(name="slide-x", mode="out-in", appear)
      v-btn(outlined, :key="getHomeComponentName", v-if="$route.fullPath == '/'", @click="setHomeComponentName(buttonSwitchComponent.component)").secondary--text
        v-icon(left) {{ buttonSwitchComponent.icon }}
        span {{ buttonSwitchComponent.name }}
      
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mdiTimer, mdiSettings } from '@mdi/js'
export default {
  data() {
    return {
      svgPath: {
        mdiTimer,
        mdiSettings
      }
    }
  },
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
    }),
    buttonSwitchComponent: function() {
      switch (this.getHomeComponentName) {
        case 'time-app':
          return {
            name: 'config',
            icon: this.svgPath.mdiSettings,
            component: 'config-app'
          }
        case 'config-app':
          return {
            name: 'time',
            icon: this.svgPath.mdiTimer,
            component: 'time-app'
          }
        default:
          return 'error'
      }
    }
  }
}
</script>

<style scoped>
.home-title::before {
  background-color: transparent !important;
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
</style>