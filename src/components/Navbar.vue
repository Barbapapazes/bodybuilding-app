<template lang="pug">
#navbar
  navigation-drawer-app
  navigation-bar-app
</template>

<script>
import NavigationBar from '@/components/shell/NavigationBar'
import NavigationDrawer from '@/components/shell/NavigationDrawer'

export default {
  components: {
    'navigation-bar-app': NavigationBar,
    'navigation-drawer-app': NavigationDrawer
  }
}
</script>