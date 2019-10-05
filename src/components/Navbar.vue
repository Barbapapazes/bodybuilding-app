<template lang="pug">
  #navigation
    v-navigation-drawer(app, v-model="drawer")
      v-list(nav)
        v-list-item-group
          v-list-item(@click="setTheme")
            v-list-item-icon
              v-icon(left) mdi-map
            v-list-item-content
              v-list-item-title Routes
      template(v-slot:prepend)
        v-row
          v-col(cols="12", align="center")
            v-btn(@click="setTheme")
              v-icon(left) mdi-brightness-6
              | {{$vuetify.theme.dark ? 'light': 'dark'}}
    v-app-bar(app)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer", left)
      v-toolbar-title.text-uppercase
        span.font-weight-black.primary--text sport
        span.font-weight-thin companion
      v-spacer
      v-btn(@click="changeComponent('time-app')", text,v-if="componentName=='config-app'").secondary
        v-icon(left) mdi-timer
        | time
      v-btn(@click="changeComponent('config-app')", text, v-else).secondary
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
