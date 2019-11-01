<template lang="pug">
#popups
  v-dialog(persistent, max-width="290", v-model="dialog")
    v-card
      v-card-title disable notification
      v-card-text to disable notifications, you must go to the browser settings and then to the site permissions and finally Notifications. Then reload the page!
      v-card-actions
        v-spacer
        v-btn(depressed, @click="dialog = false") Close
  v-snackbar(right, :timeout="0", color="secondary", v-model="snackbar").secondary
    span new content available
    v-btn(small, depressed, @click="snackbar = false, emitSkipWaiting()").background.text--text refresh
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mdiRefresh } from '@mdi/js'
export default {
  data() {
    return {
      svgPath: {
        mdiRefresh
      }
    }
  },
  mounted() {
    window.addEventListener('updateSW', () => {
      this.snackbar = true
    })
  },
  methods: {
    ...mapActions({
      setDialog: 'popups/dialog',
      setSnackbar: 'popups/snackbar'
    }),
    emitSkipWaiting: function() {
      const refreshSW = new Event('refreshSW')
      window.dispatchEvent(refreshSW)
    }
  },
  computed: {
    ...mapGetters({
      getDialog: 'popups/dialog',
      getSnackbar: 'popups/snackbar'
    }),
    dialog: {
      get: function() {
        return this.getDialog
      },
      set: function(value) {
        this.setDialog(value)
      }
    },
    snackbar: {
      get: function() {
        return this.getSnackbar
      },
      set: function(value) {
        this.setSnackbar(value)
      }
    }
  }
}
</script>