<template lang="pug">
#add-exercise
  v-dialog(max-width="500px", v-model="exerciseDialog")
    v-card
        v-card-title.pb-0
          title-app {{ getTitle }}
        v-card-text
          v-form(lazy-validation, ref="exerciseForm", v-model="valid")
            v-row
              v-col(cols="12", align="center")
                v-select(:items="getNameTrainings", label="Select", multiple, chips, hint="Add exercie to Training(s)", persistent-hint, v-model="selectedTrainings", clearable, :rules="rules.selectedTrainings", validate-on-blur, :disabled="!newExercise")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="name", v-model="editedItem.name", clearable, :rules="rules.name", counter="20", ref="name")
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
                          v-time-picker(use-seconds, format="24hr", scrollable, color="primary", :allowed-seconds="allowedStep", v-model="editedItem.countdown")
                    v-card-actions
                      v-spacer
                      v-btn(depressed, @click="countdownDialog = false") close
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="repetitions", type="number", v-model="editedItem.repetitions", @input="invalidValue(editedItem.repetitions, 'repetitions')", ref="repetitions", clearable, required, :rules="rules.repetitions")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="weight", type="number", v-model="editedItem.weight", @input="invalidValue(editedItem.weight, 'weight')", ref="weight", clearable, :rules="rules.weight")
        v-card-actions
          v-btn(@click="refresh()", depressed) refresh
          v-spacer
          v-btn(@click="close()", depressed) cancel
          v-btn(@click="save()", depressed, :disabled="!valid").primary save
          p {{editedItem}}
</template>

<script>
import TitleSlot from '@/components/TitleSlot'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'title-app': TitleSlot
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    newExercise: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      valid: true,
      countdownDialog: false,
      allowedStep: s => s % 5 === 0,
      defaultItem: {
        name: '',
        description: '',
        repetitions: '',
        series: '',
        countdown: '00:00:00',
        weight: ''
      },
      selection: [],
      editedItem: {
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
          newExercise: this.newExercise,
          selectedTrainings: [],
          editedItem: this.editedItem
        }
        this.selection.forEach(element => {
          payload.selectedTrainings.push(element)
        })
        this.setExercise(payload)
        this.close()
      }
    },
    refresh: function() {
      this.$refs.exerciseForm.validate()
    },
    close: function() {
      this.exerciseDialog = false
      this.selectedTrainings = []
      this.editedItem = this.defaultItem
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
      getNameTrainings: 'trainings/nameTrainings',
      getTrainings: 'trainings/trainings',
      getEditExercise: 'trainings/editExercise'
    }),
    getTitle: function() {
      return this.newExercise ? 'new exercise' : 'edit exercise'
    },
    exerciseDialog: {
      get: function() {
        return this.dialog
      },
      set: function(value) {
        this.$emit('exercise-dialog', value)
      }
    },
    selectedTrainings: {
      get: function() {
        if (this.newExercise) {
          return []
        } else {
          return this.getNameTrainings[this.getEditExercise.indexTable]
        }
      },
      set: function(value) {
        this.selection = value
      }
    },
    rules: function() {
      const rules = {
        selectedTrainings: [
          v => v.length > 0 || 'Training(s) is(are) required'
        ],
        name: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 20) || 'Name must be less than 20 characters',
          v => {
            // check if the value is unique in the selected trainings)
            if (
              this.newExercise ||
              (this.getEditExercise.indexTable != undefined &&
                v !=
                  this.getTrainings[this.getEditExercise.indexTable].exercises[
                    this.getEditExercise.indexRow
                  ].name)
            ) {
              let results = []
              const value = v
              this.getTrainings.forEach(training => {
                if (this.selection.includes(training.name)) {
                  results.push(
                    training.exercises.find(
                      exercise => exercise.name == value
                    ) == undefined
                      ? { exist: false, name: training.name }
                      : { exist: true, name: training.name }
                  )
                }
              })

              results = results.filter(result => result.exist)

              let error = 'no error'
              if (results.length > 0) {
                error = value + ' is used in: '
                results.forEach(result => {
                  error += result.name + ' '
                })
              }
              return !(results.length > 0) || error
            } else {
              return !!v || 'error'
            }
          }
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
      }
      return rules
    }
  },
  watch: {
    dialog: function(open) {
      if (!open) {
        this.close()
      }
    },
    newExercise: function(a) {
      if (!a) {
        this.editedItem = {
          name: this.getEditExercise.name,
          description: this.getEditExercise.description,
          repetitions: this.getEditExercise.repetitions,
          series: this.getEditExercise.series,
          countdown: this.getEditExercise.countdown,
          weight: this.getEditExercise.weight,
          indexTable: this.getEditExercise.indexTable,
          indexRow: this.getEditExercise.indexRow
        }

        this.selection.push(
          this.getNameTrainings[this.getEditExercise.indexTable]
        )
      }
    }
  }
}
</script>