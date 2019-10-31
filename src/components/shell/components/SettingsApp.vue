<template lang="pug">
#settings-app
  v-container
    v-row

      v-col(cols="6")
        v-btn(depressed, small, @click="setTheme(!getTheme)") {{getTheme ? 'dark' : 'light'}}


      v-col(cols="12")
        v-btn(depressed, small, @click="setNotification") {{allowNotification ? 'Notification On': 'Notification Off'}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      allowNotification: false
    }
  },
  mounted() {
    if (Notification.permission === 'granted') {
      this.allowNotification = true
    }
  },
  methods: {
    ...mapActions({
      setTheme: 'navbar/theme',
      setDialog: 'popups/dialog'
    }),
    setNotification: function() {
      if (this.allowNotification) {
        this.setDialog(true)
      }
      Notification.requestPermission().then(permission => {
        switch (permission) {
          case 'granted':
            this.allowNotification = true
            break

          default:
            this.allowNotification = false
            break
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      getTheme: 'navbar/theme'
    })
  }
}
</script>