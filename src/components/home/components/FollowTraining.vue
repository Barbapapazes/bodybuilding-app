<template lang="pug">
#follow-training
  v-switch(v-model="followTraining", label="Follow Training", color="secondary", :disabled="getSelectedTraining.exercises.length == 0").my-0
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      setFollowTraining: 'trainings/followTraining',
      setRunningCountdown: 'countdown/running'
    })
  },
  computed: {
    ...mapGetters({
      getFollowTraining: 'trainings/followTraining',
      getSelectedTraining: 'trainings/selectedTraining'
    }),
    followTraining: {
      get: function() {
        return this.getFollowTraining
      },
      set: function(value) {
        console.log('set follow training', value)
        this.setRunningCountdown(false)
        this.setFollowTraining(value)
      }
    }
  }
}
</script>