<template lang="pug">
#add-exercise
  v-dialog(max-width="500px", v-model="dialog")
    template(v-slot:activator="{ on }")
      v-btn(v-on="on", depressed, small).primary new exercice
    v-card
        v-card-title.pb-0
          title-app new exercise
        v-card-text
          v-form(lazy-validation, ref="exerciseForm", v-model="valid")
            v-row
              v-col(cols="12", align="center")
                v-select(:items="getNameTrainings", label="Select", multiple, chips, hint="Add exercie to Training(s)", persistent-hint, v-model="selectedTrainings", clearable, :rules="rules.selectedTrainings", validate-on-blur)
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="name", v-model="editedItem.name", clearable, :rules="rules.name", counter="20")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="description", v-model="editedItem.description", clearable, :rules="rules.description", counter="200")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="series", type="number", v-model="editedItem.series", @input="invalidValue(editedItem.series, 'series')", ref="series", clearable, required, :rules="rules.series")
              v-col(cols="12", sm="6", md="4")
                v-text-field(readonly, label="countdown", v-model="editedItem.countdown", @click="countdownDialog = !countdownDialog", :rules="rules.countdown")
                v-dialog(width="500", v-model="countdownDialog")
                  v-card
                    v-card-title
                      title-app countdown
                    v-card-text
                      v-row
                        v-col(cols="12", align="center")
                          //v-time-picker(use-seconds, format="24hr", scrollable, color="primary", :allowed-seconds="allowedStep", v-model="editedItem.countdown")
                    v-card-actions
                      v-spacer
                      v-btn(depressed, @click="countdownDialog = false") close
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="repetitions", type="number", v-model="editedItem.repetitions", @input="invalidValue(editedItem.repetitions, 'repetitions')", ref="repetitions", clearable, required, :rules="rules.repetitions")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="weight", type="number", v-model="editedItem.weight", @input="invalidValue(editedItem.weight, 'weight')", ref="weight", clearable, :rules="rules.weight")
        v-card-actions
          v-spacer
          v-btn(@click="close()", depressed).primary cancel
          v-btn(@click="save()", depressed, :disabled="!valid").primary save
</template>

<script>
import TitleSlot from '@/components/TitleSlot'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'title-app': TitleSlot
  },
  props: {
    new: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      valid: true,
      dialog: false,
      countdownDialog: false,
      allowedStep: s => s % 5 === 0,
      rules: {
        selectedTrainings: [
          v => v.length > 0 || 'Training(s) is(are) required'
        ],
        name: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 20) || 'Name must be less than 20 characters'
        ],
        description: [
          v =>
            (v && v.length <= 200) ||
            'Description must be less than 200 characters'
        ],
        series: [v => !!v || 'Series is required'],
        countdown: [
          v => /\d{2}:\d{2}:\d{2}/gi.test(v) || 'Countdown is not valid'
        ],
        repetitions: [v => !!v || 'Repetitions is required'],
        weight: [v => !!v]
      },
      selectedTrainings: [],
      editedItem: {
        name: 'a',
        description: 'a',
        repetitions: '1',
        series: '1',
        countdown: '00:00:00',
        weight: ''
      },
      defaultItem: {
        name: '',
        description: '',
        repetitions: '',
        series: '',
        countdown: '00:00:00',
        weight: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setExercise: 'trainings/exercice'
    }),
    save: function() {
      if (this.$refs.exerciseForm.validate()) {
        if (this.editedItem.weight == '') {
          this.editedItem.weight = 0
        }
        const payload = {
          editedItem: this.editedItem,
          new: this.new,
          selectedTrainings: []
        }
        this.selectedTrainings.forEach(element => {
          payload.selectedTrainings.push(element)
        })
        this.setExercise(payload)
        this.close()
      }
    },
    close: function() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.selectedTrainings = this.selectedTrainings.splice(0)
      }, 300)
    },
    invalidValue: function(value, name) {
      if (value < 0) {
        this.editedItem[name] = 0
        this.$refs[name].lazyValue = this.editedItem[name]
      }
    }
  },
  computed: {
    ...mapGetters({
      getNameTrainings: 'trainings/nameTrainings'
    })
  }
}
</script>