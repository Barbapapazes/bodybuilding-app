<template lang="pug">
#dialog
  v-dialog(persistent, max-width="350", v-model="dialog")
    v-card
      v-card-title
        h3.text-capitalize
          slot(name="title")
      v-card-text.text-justify
        slot(name="text")
      v-card-actions
        v-spacer
        v-btn(depressed, @click="dialog = false").primary close
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions({
      setDialog: 'popups/dialog'
    })
  },
  computed: {
    ...mapGetters({
      getDialog: 'popups/dialog'
    }),
    dialog: {
      get: function() {
        return this.getDialog
      },
      set: function(value) {
        this.setDialog(value)
      }
    }
  }
}
</script>