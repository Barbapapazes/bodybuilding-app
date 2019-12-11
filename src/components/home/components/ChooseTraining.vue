<template lang="pug">
#choose-training
  v-menu(v-if="getNameTrainings.length > 0", offset-y, transition="scale-transition", origin="top right", :disabled="getFollowTraining")
    template(v-slot:activator="{on}")
      v-btn(v-on="on", depressed, small, :disabled="getFollowTraining").primary select a training
    v-list
      v-list-item(v-for="(name, index) in getNameTrainings", :key="index", @click="setSelectedTrainingName(name)")
        v-list-item-title.text-capitalize {{ name }}
      v-list-item(key="remove", @click="setFollowTraining(false), setSelectedTrainingName('')")
        v-list-item-title.text-capitalize unselect training
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
      setSelectedTrainingName: 'trainings/selectedTrainingName',
      setFollowTraining: 'trainings/followTraining'
    })
  },
  computed: {
    ...mapGetters({
      getNameTrainings: 'trainings/nameTrainings',
      getFollowTraining: 'trainings/followTraining'
    })
  }
}
</script>