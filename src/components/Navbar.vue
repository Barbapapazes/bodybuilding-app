<template lang="pug">
  v-app-bar(app)
    v-toolbar-title sport companion
    v-spacer
    v-btn(@click="dark = !dark").mr-2
      v-icon(left) mdi-brightness-6
      | theme
    v-btn(@click="changeComponent('time-app')" v-if="componentName=='config-app'")
      v-icon(left) mdi-timer
      | time
    v-btn(@click="changeComponent('config-app')" v-else)
      v-icon(left) mdi-settings
      | config

</template>

<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  mounted() {
    this.$store.dispatch('homeComponentName', 'time-app')
  },
  methods: {
    changeComponent(payload) {
      this.$store.dispatch('homeComponentName', payload)
    }
  },
  computed: {
    componentName() {
      return this.$store.getters.homeComponentName
    }
  },
  watch: {
    dark: function(a, b) {
      this.$vuetify.theme.dark = this.dark
    }
  }
}
</script>
