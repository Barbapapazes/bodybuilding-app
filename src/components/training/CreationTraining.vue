<template lang="pug">
#creation-training
  title-app create a new training
  v-form(v-model="valid", ref="form")
    v-row
      v-col(cols="12")
        v-text-field(label="Name of the Training", required, v-model="nameTraning", :rules="nameRules", clearable, autofocus, @keyup.enter="validate()")
        
      v-col(cols="12", align="end")
        v-btn(:disabled="!valid", @click="validate").primary Validate
  title-app name of the trainings
  v-list(v-if="getNametranings.length > 0").background.mt-3
    transition-group(name="fade")
      v-list-item(v-for="item in getNametranings", :key="item")
        v-list-item-content
          v-list-item-title.text--text.font-weight-blod.text-capitalize {{item}}
  empty-data-app(v-else).pt-5 No training already saved
        
</template>

<script>
import TitleSlot from '@/components/TitleSlot'
import EmptyDataSlot from '@/components/EmptyDataSlot'

import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'title-app': TitleSlot,
    'empty-data-app': EmptyDataSlot
  },
  data() {
    return {
      valid: false,
      nameTraning: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => {
          return this.getNametranings.find(
            element => element == v.toLowerCase()
          )
            ? 'Already use (non case sensitive)'
            : !!v
        }
      ]
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
  },
  computed: {
    ...mapGetters({
      getNametranings: 'trainings/nameTrainings'
    })
  }
}
</script>