<template lang="pug">
  #navigation

    v-navigation-drawer(app, v-model="drawer")
      v-list(nav)
        v-list-item-group

          v-list-item(to='/about')
            v-list-item-icon
              v-icon(left)
            v-list-item-content
              v-list-item-title about

      template(v-slot:prepend)
        v-row()
          v-col(cols="6", align="end")

            v-btn(@click="setTheme", depressed, small)
              v-icon(left) mdi-brightness-6
              | {{$vuetify.theme.dark ? 'dark' : 'light'}}

          v-col(cols="6", align="start")

            v-btn(@click="setVibrate", depressed, small)
              v-icon(left) {{getVibrate ? 'mdi-vibrate' : 'mdi-vibrate-off'}}
              | {{getVibrate ? 'vibrate' :'quiet'}}

    v-app-bar(app).background.lighten-1

      v-app-bar-nav-icon(@click.stop="drawer = !drawer", left)

      v-toolbar-title
        v-btn(to="/", text, exact-active-class="home-title").text-uppercase
          span.font-weight-black.secondary--text sport
          span.font-weight-thin companion {{drawer}}

      v-spacer

      v-btn(@click="setComponentsHome('time-app')", outlined,v-if="getComponentName=='config-app' && homePath").secondary--text
        v-icon(left) mdi-timer
        | time
      v-btn(@click="setComponentsHome('config-app')", outlined, v-else-if="getComponentName=='time-app' && homePath").secondary--text
        v-icon(left) mdi-settings
        | config
</template>

<script>
export default {
  props: {
    openDrawer: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: null
    }
  },
  mounted() {
    this.$store.dispatch('componentsHome', 'time-app')
  },
  methods: {
    setTheme() {
      this.$store.dispatch('setTheme')
    },
    setVibrate() {
      this.$store.dispatch('setVibrate', !this.getVibrate)
    },
    setComponentsHome(payload) {
      this.$store.dispatch('componentsHome', payload)
    }
  },
  computed: {
    getVibrate() {
      return this.$store.getters.vibrate
    },
    getComponentName() {
      return this.$store.getters.componentsHome
    },
    homePath() {
      return this.$route.fullPath == '/'
    }
  },
  watch: {
    openDrawer() {
      if (this.openDrawer) this.drawer = this.openDrawer
    },
    drawer(a) {
      if (a == false) this.$emit('close-drawer')
    }
  }
}
</script>

<style scoped>
.home-title::before {
  background-color: transparent !important;
}
</style>
