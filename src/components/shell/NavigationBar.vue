<template lang="pug">
#navigation-bar
  v-app-bar(app, flat).background.lighten-1
    v-app-bar-nav-icon(@click.stop="setDrawer(!getDrawer)", left)

    v-toolbar-title
      v-btn(to="/", text, exact-active-class="home-title").text-uppercase
        span.font-weight-bold.secondary--text sport
        span.font-weight-thin companion

    v-spacer

    transition(name="slide-x", mode="out-in", appear, v-if="$route.fullPath == '/'")
      v-btn(outlined, :key="getHomeComponentName", @click="setHomeComponentName(buttonSwitchComponent(getHomeComponentName).component)", :disabled="getFollowTraining").secondary--text
        div(v-if="$vuetify.breakpoint.smAndUp")
          v-icon(left) {{ buttonSwitchComponent(getHomeComponentName).icon }}
          span {{ buttonSwitchComponent(getHomeComponentName).name }}
        div(v-else)
          v-icon() {{ buttonSwitchComponent(getHomeComponentName).icon }}


    transition(name="slide-x", mode="out-in", appear, v-if="$route.fullPath == '/training'")
      v-btn(outlined, :key="getTrainingComponentName", @click="setTrainingComponentName(buttonSwitchComponent(getTrainingComponentName).component)").secondary--text
        div(v-if="$vuetify.breakpoint.smAndUp")
          v-icon(left) {{ buttonSwitchComponent(getTrainingComponentName).icon }}
          span {{ buttonSwitchComponent(getTrainingComponentName).name }}
        div(v-else)
          v-icon {{ buttonSwitchComponent(getTrainingComponentName).icon }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mdiTimer, mdiSettings, mdiTableEdit, mdiTablePlus } from '@mdi/js'
export default {
  data() {
    return {
      svgPath: {
        mdiTimer,
        mdiSettings,
        mdiTableEdit,
        mdiTablePlus
      }
    }
  },
  methods: {
    ...mapActions({
      setHomeComponentName: 'navbar/homeComponentName',
      setTrainingComponentName: 'navbar/trainingComponentName',
      setDrawer: 'navbar/drawer'
    }),
    buttonSwitchComponent: function(componentName) {
      switch (componentName) {
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
        case 'tables-training-app':
          return {
            name: 'add trainings',
            icon: this.svgPath.mdiTablePlus,
            component: 'creation-training-app'
          }
        case 'creation-training-app':
          return {
            name: 'view trainings',
            icon: this.svgPath.mdiTableEdit,
            component: 'tables-training-app'
          }
        default:
          return 'error'
      }
    }
  },
  computed: {
    ...mapGetters({
      getHomeComponentName: 'navbar/homeComponentName',
      getTrainingComponentName: 'navbar/trainingComponentName',
      getDrawer: 'navbar/drawer',
      getFollowTraining: 'trainings/followTraining'
    })
  }
}
</script>

<style>
.home-title::before {
  background-color: transparent !important;
}
</style>