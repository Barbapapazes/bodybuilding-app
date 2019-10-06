<template lang="pug">
  #navigation
    v-navigation-drawer(app, v-model="drawer")
      v-list(nav)
        v-list-item-group
          v-list-item()
            v-list-item-icon
              v-icon(left)
            v-list-item-content
              v-list-item-title
      template(v-slot:prepend)
        v-row
          v-col(cols="12", align="center")
            v-btn(@click="setTheme")
              v-icon(left) mdi-brightness-6
              | {{$vuetify.theme.dark ? 'light': 'dark'}}
    v-app-bar(app).background.lighten-1
      v-app-bar-nav-icon(@click.stop="drawer = !drawer", left)
      v-toolbar-title.text-uppercase
        span.font-weight-black.secondary--text sport
        span.font-weight-thin companion
      v-spacer
      v-btn(@click="changeComponent('time-app')", outlined,v-if="componentName=='config-app'").secondary--text
        v-icon(left) mdi-timer
        | time
      v-btn(@click="changeComponent('config-app')", outlined, v-else).secondary--text
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
    }
  },
  computed: {
    componentName() {
      return this.$store.getters.homeComponentName
    }
  }
}
</script>
