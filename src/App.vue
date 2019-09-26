<template lang="pug">
  v-app
    v-content
      v-btn(@click="dark = !dark") theme
      v-container(fluid)
        router-view
</template>

<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  watch: {
    dark: function(a, b) {
      this.$vuetify.theme.dark = this.dark
    }
  }
}
</script>
