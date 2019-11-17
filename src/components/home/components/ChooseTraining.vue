<template lang="pug">
#choose-training
  v-menu(v-if="getNameTrainings.length > 0", offset-y, transition="slide-y-transition")
    template(v-slot:activator="{on}")
      v-btn(v-on="on", depressed).primary select a training
    v-list  
      v-list-item(v-for="(name, index) in getNameTrainings", :key="index", @click="setSelectedTraining(name)")
        v-list-item-title {{ name }}
  v-btn(v-else, :to="{name: 'training'}", depressed).primary Create a training
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      setSelectedTraining: 'trainings/selectedTraining'
    })
  },
  computed: {
    ...mapGetters({
      getNameTrainings: 'trainings/nameTrainings'
    })
  }
}
</script>