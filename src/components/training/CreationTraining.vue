<template lang="pug">
#creation-training
  v-form(v-model="valid", ref="form")
    v-container
      v-row

        v-col(cols="12")
          v-text-field(label="name of the training", required, v-model="nameTraning", :rules="nameRules", clearable)
        
        v-col(cols="12")
          v-btn(:disabled="!valid", @click="validate") Validate
        
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      valid: false,
      nameTraning: '',
      nameRules: [v => !!v || 'Name is required']
    }
  },
  methods: {
    ...mapActions({
      setAddTable: 'trainings/addTable'
    }),
    validate() {
      if (this.$refs.form.validate()) {
        console.log('form is valid')
        this.setAddTable(this.nameTraning)
        this.$refs.form.reset()
      }
    }
  }
}
</script>