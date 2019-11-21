<template lang="pug">
#add-exercise
  v-dialog(max-width="500px", v-model="dialog")
    template(v-slot:activator="{ on }")
      v-btn(v-on="on", depressed, small).primary new exercice
    v-card()
      form(lazy-validation)
        v-card-title.pb-0
          title-app new exercise
        v-card-text
          v-container.pa-0
            v-row
              v-col(cols="12", align="center")
                v-select(:items="getNameTrainings", label="Select", multiple, chips, hint="Add exercie to Training(s)", persistent-hint, v-model="selectedTrainings")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="name", autofocus, v-model="editedItem.name")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="description", v-model="editedItem.description")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="repetitions", type="number", v-model="editedItem.repetitions")
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="series", type="number", v-model="editedItem.series")
              v-col(cols="12", sm="6", md="4")
                v-text-field(readonly, label="countdown", v-model="editedItem.countdown")
                v-dialog(width="500")
                  v-card
                    v-card-titl
                      title-app countdown
                    v-card-text
                      v-row
                        v-col(cols="12", align="center")
                          v-time-picker(use-seconds, format="24hr", scrollable, color="primary")
                    v-card-actions
                      v-spacer
                      v-btn(depressed) close
              v-col(cols="12", sm="6", md="4")
                v-text-field(label="weight", type="number", v-model="editedItem.weight")
        v-card-actions
          v-spacer
          v-btn(@click="close()", depressed).primary cancel
          v-btn(@click="save()", depressed).primary save
</template>

<script>
import TitleSlot from '@/components/TitleSlot'
import { mapGetters } from 'vuex'

export default {
  components: {
    'title-app': TitleSlot
  },
  data() {
    return {
      dialog: false,
      selectedTrainings: [],
      editedItem: {
        name: '',
        description: '',
        repetitions: 0,
        series: 0,
        countdown: '00:00:00',
        weight: 0
      },
      defaultItem: {
        name: '',
        description: '',
        repetitions: 0,
        series: 0,
        countdown: '00:00:00',
        weight: 0
      }
    }
  },
  methods: {
    save: function() {
      console.log(this.selectedTrainings, this.editedItem)
    },
    close: function() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.selectedTrainings = []
      }, 300)
    }
  },
  computed: {
    ...mapGetters({
      getNameTrainings: 'trainings/nameTrainings'
    })
  }
}
</script>