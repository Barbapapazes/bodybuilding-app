<template lang="pug">
#navigation-drawer
  v-navigation-drawer(app, v-model="drawer").background
    v-list(nav)
      v-list-item-group

        v-list-item(:to="{name: 'home'}", exact)
          v-list-item-icon

          v-list-item-content
            v-list-item-title.text-capitalize.title.primary--text.font-weight-bold home

        v-list-item(:to="{name: 'about'}")
          v-list-item-icon

          v-list-item-content
            v-list-item-title.text-capitalize.title.primary--text.font-weight-bold about

    template(v-slot:prepend)
      settings-app
      v-divider.background.lighten-2.ma-2
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SettingsApp from '@/components/shell/components/SettingsApp'

export default {
  components: {
    'settings-app': SettingsApp
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      setDrawer: 'navbar/drawer'
    })
  },
  computed: {
    ...mapGetters({
      getDrawer: 'navbar/drawer'
    }),
    drawer: {
      get: function() {
        return this.getDrawer
      },
      set: function(value) {
        if (!value) this.setDrawer(value)
      }
    }
  }
}
</script>