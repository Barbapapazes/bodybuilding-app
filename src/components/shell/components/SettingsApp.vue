<template lang="pug">
#settings-app
  v-container
    v-row(no-gutters)

      v-col(cols="12", align="center").mb-2
        v-btn(depressed, small, @click="setTheme(!getTheme)")
          v-icon(left, small).text--text {{ svgPath.mdiBrightness6 }}
          span {{getTheme ? 'dark' : 'light'}}


      v-col(cols="12", align="center")
        v-btn(depressed, small, @click="setNotification")
          v-icon(left, small) {{allowNotification ? svgPath.mdiBell : svgPath.mdiBellOff}}
          span {{allowNotification ? 'Notification On': 'Notification Off'}}
  
  dialog-app
    template(v-slot:title) disable notification
    template(v-slot:text) To disable notifications, you must go to the browser settings and then to the site permissions and finally "Notifications". Then reload the page!
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mdiBrightness6, mdiBell, mdiBellOff } from '@mdi/js'
import DialogSlot from '@/components/shell/components/Dialog'
export default {
  components: {
    'dialog-app': DialogSlot
  },
  data() {
    return {
      svgPath: {
        mdiBrightness6,
        mdiBell,
        mdiBellOff
      },
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