<template lang="pug">
#show-training
  transition(name="fade", mode="out-in")
    v-data-table(:headers="headers",  :items="getSelectedTraining[0].exercises", item-key="name",denses, :expanded.sync="expanded",  v-if="getSelectedTraining.length > 0", :key="getSelectedTraining[0].name").background
      template(v-slot:top)
        v-toolbar(flat).background
          v-toolbar-title {{getSelectedTraining[0].name}}

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

      template(v-slot:item.data-table-expand="{ item }")
        v-btn(@click="expanded = [item]" v-if="!expanded.includes(item)", x-small, text, key="down")
            v-icon(small) {{svgPath.mdiChevronDown}}
        v-btn(@click="expanded = []" v-if="expanded.includes(item)", x-small, text, key="up")
            v-icon(small) {{svgPath.mdiChevronUp}}

      template(v-slot:expanded-item="{ headers, item }")
        td(:colspan="headers.length").background.lighten-1
          span.font-weight-bold.text-capitalize {{item.name}}&#58; 
          span {{item.description == '' ? 'No description' : item.description}}
</template>

<script>
import { mapGetters } from 'vuex'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
export default {
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
  methods: {},
  computed: {
    ...mapGetters({
      getSelectedTraining: 'trainings/selectedTraining'
    })
  }
}
</script>

<style>
thead.v-data-table-header.v-data-table-header-mobile {
  display: none !important;
}
</style>