<template lang="pug">
#snackbar
  v-snackbar(right, :timeout="0", color="secondary", v-model="snackbar")
    span.text-capitalize.font-weight-bold
      slot(name="text")
    v-btn(small, depressed, @click="actions(), snackbar = false").text--text
      v-icon(left, small, v-if="icon") {{ icon }}
      span
        slot(name="btn-text") 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    icon: {
      type: String,
      default: undefined
    },
    skipWaiting: {
      type: Boolean,
      default: false
    },
    cookies: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.skipWaiting) {
      window.addEventListener('updateSW', () => {
        this.snackbar = true
      })
    }
  },
  methods: {
    ...mapActions({
      setSnackbar: 'popups/snackbar'
    }),
    emitSkipWaiting: function() {
      const refreshSW = new Event('refreshSW')
      window.dispatchEvent(refreshSW)
    },
    actions: function() {
      if (this.cookies) {
        //
      } else if (this.skipWaiting) {
        this.emitSkipWaiting()
      } else {
        //
      }
    }
  },
  computed: {
    ...mapGetters({
      getSnackbar: 'popups/snackbar'
    }),
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
