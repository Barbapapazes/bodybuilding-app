<template lang="pug">
#follow-training
  v-switch(v-model="followTraining", label="Follow Training").my-0
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      setFollowTraining: 'trainings/followTraining'
    })
  },
  computed: {
    ...mapGetters({
      getFollowTraining: 'trainings/followTraining'
    }),
    followTraining: {
      get: function() {
        return this.getFollowTraining
      },
      set: function(value) {
        this.setFollowTraining(value)
      }
    }
  }
}
</script>