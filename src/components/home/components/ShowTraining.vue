<template lang="pug">
#show-training
  transition(name="slide-up", mode="out-in")
    v-data-table(:headers="headers",  :items="getSelectedTraining.exercises", item-key="name", denses, :expanded.sync="expanded", :key="getSelectedTraining.name", v-if="getSelectedTraining != undefined").background
      template(v-slot:top)
        v-toolbar(flat, dense).background
          v-container
            v-row(align="start")
              v-col(cols="6").pa-0
                follow-training-app
              v-col(cols="6", align="end").pa-0
                v-toolbar-title.text-capitalize {{getSelectedTraining.name}}

      template(v-slot:item.name="{ item }")
        span.font-weight-bold.text-uppercase {{ item.name }}

      template(v-slot:item.countdown="{ item }")
        v-chip.accent2.white--text {{ item.countdown }}

      template(v-slot:item.series="{ item }")
        v-chip.font-weight-bold.text-capitalize.secondary {{ item.series }}

      template(v-slot:item.repetitions="{ item }")
        v-chip.font-weight-bold.text-capitalize.accent {{ item.repetitions }}

      template(v-slot:item.weight="{ item }")
        v-chip.font-weight-bold.text-capitalize.primary {{ item.weight }}

      template(v-slot:item.data-table-expand="{ item }", tag="div")
          v-btn(text, small, @click="expandRow(item)")
            transition(name="rotate", mode="out-in")
              v-icon(:key="iconExpand(item)") {{ iconExpand(item) }}

      template(v-slot:expanded-item="{ headers, item }")
        td(:colspan="headers.length").background.lighten-1
          span().font-weight-bold.text-capitalize {{item.name}}&#58; 
          span() {{item.description == '' ? 'No description' : item.description}}
    empty-data-app(v-else)
      template {{getNameTrainings.length != 0 ?'select a training !': 'create your first training'}}
</template>

<script>
import { mapGetters } from 'vuex'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

import FollowTraining from '@/components/home/components/FollowTraining'
import EmptyData from '@/components/EmptyDataSlot'

export default {
  components: {
    'follow-training-app': FollowTraining,
    'empty-data-app': EmptyData
  },
  data() {
    return {
      svgPath: {
        mdiChevronDown,
        mdiChevronUp
      },
      expanded: [],
      headers: [
        { text: 'name', value: 'name', sortable: false },
        {
          text: 'countdown',
          value: 'countdown',
          sortable: false,
          align: 'center'
        },
        { text: 'series', value: 'series', sortable: false, align: 'center' },
        {
          text: 'repetitions',
          value: 'repetitions',
          sortable: false,
          align: 'center'
        },
        { text: 'weight', value: 'weight', sortable: false, align: 'center' },
        { text: '', value: 'data-table-expand', sortable: false }
      ]
    }
  },
  methods: {
    expandRow: function(value) {
      if (this.expanded.length == 0) {
        this.expanded.push(value)
      } else if (this.expanded[0] == value) {
        this.expanded.pop()
      } else {
        this.expanded.pop()
        this.expanded.push(value)
      }
    },
    iconExpand: function(value) {
      return this.expanded[0] && this.expanded[0] == value
        ? this.svgPath.mdiChevronUp
        : this.svgPath.mdiChevronDown
    }
  },
  computed: {
    ...mapGetters({
      getSelectedTraining: 'trainings/selectedTraining',
      getNameTrainings: 'trainings/nameTrainings'
    })
  }
}
</script>

<style>
thead.v-data-table-header.v-data-table-header-mobile {
  display: none !important;
}
</style>