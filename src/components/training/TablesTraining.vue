<template lang="pug">
#tables-training
  v-row(align="center")
    v-col(cols="7").pt-0
      title-app organise and create exercises
    v-col(cols="5", align="end").pt-0
      add-exercise-app
  div#listTables
      empty-data-app(v-if="getTrainings.length == 0").pt-2
        template no training
      v-data-table(:headers="headers", :items="training.exercises", item-key="name", :key="training.name", v-for="(training, index) in getTrainings", dense, hide-default-footer, v-else).background.lighten-2.my-3

        template(v-slot:top)
          v-toolbar(flat).background
            v-toolbar-title.text-capitalize {{training.name}}
            v-divider(vertical, inset).mx-4
            v-icon(@click="deleteTable(index)") {{svgPath.mdiTrashCan}}
        
        template(v-slot:item.data-table-drag="{item}")
          td(style="width: 28px;").handle 
            v-icon(small) {{svgPath.mdiSelectAll}}

        template(v-slot:item.action="{item}")  
          //v-icon(small, @click="editItem(item, index)").mr-2 {{svgPath.mdiPencil}}
          v-icon(small, @click="deleteItem(item, index)").mr-2 {{svgPath.mdiTrashCan}}
</template>

<script>
import Sortable from 'sortablejs'
import { mdiPencil, mdiTrashCan, mdiSelectAll } from '@mdi/js'
import { mapGetters, mapActions } from 'vuex'

import TitleSlot from '@/components/TitleSlot'
import AddExercise from '@/components/training/components/addExercise'
import EmptyDataSlot from '@/components/EmptyDataSlot'
export default {
  components: {
    'title-app': TitleSlot,
    'add-exercise-app': AddExercise,
    'empty-data-app': EmptyDataSlot
  },
  mounted() {
    this.sortableRows(true)
    let _self = this
    let listTables = document.getElementById('listTables')
    Sortable.create(listTables, {
      ghostClass: 'ghost',
      forceFallback: true,
      fallbackClass: 'dragTable',
      animation: 200,
      easing: 'cubic-bezier(0.08, 0.24, 0, 0.72)',
      onEnd: function({ newIndex, oldIndex }) {
        const payload = {
          newIndex: newIndex,
          oldIndex: oldIndex
        }
        _self.setSpliceTable(payload)
        _self.sortableRows(false)
      }
    })
  },
  data() {
    return {
      svgPath: {
        mdiPencil,
        mdiTrashCan,
        mdiSelectAll
      },
      dialog: false,
      countdownDialog: false,
      headers: [
        { text: '', value: 'data-table-drag', sortable: false },
        { text: 'name', value: 'name', sortable: false },
        { text: 'countdown', value: 'countdown', sortable: false },
        { text: 'weight', value: 'weight', sortable: false },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      sortables: [],
      valid: true
    }
  },
  methods: {
    ...mapActions({
      setExercices: 'trainings/exercices',
      setSpliceExercice: 'trainings/spliceExercice',
      setDeleteExercice: 'trainings/deleteExercice',
      setSpliceTable: 'trainings/spliceTable',
      setDeleteTable: 'trainings/deleteTable'
    }),
    deleteItem: function(item, index) {
      if (confirm('Are you sure you want to delete this item?')) {
        const payload = {
          tableIndex: index,
          index: this.getTrainings[index].exercises.indexOf(item)
        }
        this.setDeleteExercice(payload)
      } else {
        return
      }
    },
    deleteTable: function(index) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.setDeleteTable(index)
      } else {
        return
      }
    },
    sortableRows: function(firstTime) {
      let tables = document.querySelectorAll('.v-data-table tbody')
      const _self = this
      if (!firstTime) {
        this.sortables.forEach(sortable => {
          sortable.destroy()
        })
        this.sortables = []
      }
      tables.forEach((table, index) => {
        this.sortables.push(
          Sortable.create(table, {
            handle: '.handle',
            ghostClass: 'ghost',
            forceFallback: true,
            fallbackClass: 'dragRow',
            animation: 200,
            onEnd: function({ newIndex, oldIndex }) {
              const payload = {
                tableIndex: index,
                newIndex: newIndex,
                oldIndex: oldIndex
              }
              _self.setSpliceExercice(payload)
            }
          })
        )
      })
    }
  },
  computed: {
    ...mapGetters({
      getTrainings: 'trainings/trainings'
    })
  }
}
</script>

<style>
.handle {
  cursor: move !important;
  cursor: grabbing !important;
}
.ghost {
  opacity: 0.35;
}
.dragRow {
  opacity: 1;
  background-color: #414141;
}
.dragTable > div > * {
  display: none;
}
.dragTable {
  height: 0 !important;
}
</style>