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
              v-icon(left) {{vibrate ? 'mdi-vibrate' : 'mdi-vibrate-off'}}
              | {{vibrate ? 'vibrate' :'quiet'}}
    v-app-bar(app).background.lighten-1
      v-app-bar-nav-icon(@click.stop="drawer = !drawer", left)
      v-toolbar-title
        v-btn(to="/", text, exact-active-class="home-title").text-uppercase
          span.font-weight-black.secondary--text sport
          span.font-weight-thin companion
      v-spacer
      v-btn(@click="changeComponent('time-app')", outlined,v-if="componentName=='config-app' && home").secondary--text
        v-icon(left) mdi-timer
        | time
      v-btn(@click="changeComponent('config-app')", outlined, v-else-if="componentName=='time-app' && home").secondary--text
        v-icon(left) mdi-settings
        | config

</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  },
  mounted() {
    this.$store.dispatch('homeComponentName', 'time-app')
  },
  methods: {
    changeComponent(payload) {
      this.$store.dispatch('homeComponentName', payload)
    },
    setTheme() {
      this.$store.dispatch('setTheme')
    },
    setVibrate() {
      this.$store.dispatch('allowVibrate', !this.vibrate)
    }
  },
  computed: {
    componentName() {
      return this.$store.getters.homeComponentName
    },
    vibrate() {
      return this.$store.getters.allowVibrate
    },
    home() {
      return this.$route.fullPath == '/'
    }
  },
  watch: {
    vibrate(a) {
      this.$store.dispatch('allowVibrate', a)
    }
  }
}
</script>

<style scoped>
.home-title::before {
  background-color: transparent !important;
}
</style>