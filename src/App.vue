<template lang="pug">
  v-app(:style="{background: $vuetify.theme.themes[theme].background}")
    navbar-app
    v-content
      v-container(fluid)
        router-view
    footer-app
    cookie-law
      div(slot-scope="props")
        button(class="skew" @click="props.accept")
          span I accept
        p This site uses 🍪
        button(class="skew" @click="props.close")
          span Ignore me
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import footer from '@/components/Footer'
import cookieLaw from 'vue-cookie-law'

export default {
  components: {
    'navbar-app': navbar,
    'footer-app': footer,
    'cookie-law': cookieLaw
  },
  data() {
    return {}
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>
