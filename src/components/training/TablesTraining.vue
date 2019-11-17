<template lang="pug">
#tables-training
  div#listTables
    v-data-table(:headers="headers", :items="training.exercises", item-key="name", :key="training.name", v-for="(training, index) in getTrainings", dense, hide-default-footer).my-2

      template(v-slot:item.data-table-drag="{item}")
          td(style="width: 28px;").handle 
            v-icon(small) {{svgPath.mdiSelectAll}}

      template(v-slot:top)
        v-toolbar(flat)
          v-toolbar-title {{training.name}}
          v-divider(vertical, inset).mx-4
          v-icon(@click="deleteTable(index)") {{svgPath.mdiTrashCan}}
          v-spacer
          v-dialog(v-model="dialog" max-width="500px")
            template(v-slot:activator="{ on }")
              v-btn(v-on="on", @click="tableIndex = index").primary new item
            v-card
              form(v-model="valid", lazy-validation)
                v-card-title
                  title-app {{formTitle}}
                v-card-text
                  v-container
                    v-row
                      v-col(cols="12", sm="6", md="4")
                        v-text-field(v-model="editedItem.name" label="name", :rules="rules.name")
                      v-col(cols="12", sm="6", md="4")
                        v-text-field(v-model="editedItem.description" label="description")
                      v-col(cols="12", sm="6", md="4")
                        v-text-field(v-model="editedItem.repetitions" label="repetitions", type="number")
                      v-col(cols="12", sm="6", md="4")
                        v-text-field(v-model="editedItem.series" label="series", type="number")
                      v-col(cols="12", sm="6", md="4")
                        v-text-field(@click="countdownDialog = !countdownDialog", v-model="editedItem.countdown", readonly, label="countdown")
                        v-dialog(v-model="countdownDialog", width="500")
                          v-card
                            v-card-title
                              title-app countdown
                            v-card-text
                              v-row
                                v-col(cols="12", align="center")
                                  v-time-picker(use-seconds, format="24hr", scrollable, color="primary", :allowed-seconds="allowedStep", v-model="editedItem.countdown")
                            v-card-actions
                              v-spacer
                              v-btn(@click="countdownDialog = false", depressed) close
                      v-col(cols="12", sm="6", md="4")
                        v-text-field(v-model="editedItem.weight" label="weight", type="number")
                v-card-actions
                  v-spacer
                  v-btn(@click="close()", depressed).primary cancel
                  v-btn(@click="save()", depressed, :disabled="!valid").primary save

      template(v-slot:item.action="{item}")  
        v-icon(small, @click="editItem(item, index)").mr-2 {{svgPath.mdiPencil}}
        v-icon(small, @click="deleteItem(item, index)").mr-2 {{svgPath.mdiTrashCan}}
</template>

<script>
import Sortable from 'sortablejs'
import { mdiPencil, mdiTrashCan, mdiSelectAll } from '@mdi/js'
import { mapGetters, mapActions } from 'vuex'

import TitleSlot from '@/components/TitleSlot'

export default {
  components: {
    'title-app': TitleSlot
  },
  mounted() {
    this.sortableRows(true)
    let _self = this
    let listTables = document.getElementById('listTables')
    Sortable.create(listTables, {
      ghostClass: 'ghost',
      forceFallback: true,
      fallbackClass: 'dragTable',
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
      editedIndex: -1,
      tableIndex: -1,
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
      },
      headers: [
        { text: '', value: 'data-table-drag' },
        { text: 'name', value: 'name' },
        { text: 'countdown', value: 'countdown' },
        { text: 'weight', value: 'weight' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      sortables: [],
      allowedStep: s => s % 5 === 0,
      valid: true,
      rules: {
        name: [v => !!v || 'name is required']
      }
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
    editItem: function(item, index) {
      this.editedIndex = this.getTrainings[index].exercises.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.tableIndex = index
      this.dialog = true
    },
    close: function() {
      this.dialog = false
      this.tableIndex = -1
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save: function() {
      console.log(this.$refs)
      const payload = {
        editedItem: this.editedItem,
        editedIndex: this.editedIndex,
        tableIndex: this.tableIndex
      }
      console.log(payload)
      this.setExercices(payload)
      this.close()
    },
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
    }),
    formTitle: function() {
      return this.editedIndex === -1 ? 'new item' : 'edit item'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  }
}
</script>

<style>
.handle {
  cursor: move !important;
  cursor: grabbing !important;
}
.ghost {
  opacity: 0.2;
}
.dragRow {
  opacity: 1;
  background-color: #414141;
}
.dragTable {
  opacity: 1;
  background-color: #414141;
}
.dragTable > div > * {
  display: none;
}
</style>