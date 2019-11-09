<template lang="pug">
#tables-training
  div#listTables
    v-data-table(:headers="headers", :items="training.exercises", item-key="name", :key="training.name", v-for="(training, index) in getTrainings", dense, hide-default-footer).my-2

      template(v-slot:item.data-table-drag="{item}")
          td(style="width: 28px;").handle ::

      template(v-slot:top)
        v-toolbar(flat)
          v-toolbar-title {{training.name}}
          v-divider(vertical, inset).mx-4
          v-spacer
          v-dialog(v-model="dialog" max-width="500px")
            template(v-slot:activator="{ on }")
              v-btn(v-on="on", @click="tableIndex = index").primary new item
            v-card
              v-card-title  {{formTitle}}
              v-card-text
                v-container
                  v-row
                    v-col(cols="12", sm="6", md="4")
                      v-text-field(v-model="editedItem.name" label="name")
                    v-col(cols="12", sm="6", md="4")
                      v-text-field(v-model="editedItem.description" label="description")
                    v-col(cols="12", sm="6", md="4")
                      v-text-field(v-model="editedItem.repetitions" label="repetitions")
                    v-col(cols="12", sm="6", md="4")
                      v-text-field(v-model="editedItem.series" label="series")
                    v-col(cols="12", sm="6", md="4")
                      v-text-field(v-model="editedItem.countdown" label="countdown")
                    v-col(cols="12", sm="6", md="4")
                      v-text-field(v-model="editedItem.weight" label="weight")
              v-card-actions
                v-spacer
                v-btn(@click="close()") cancel
                v-btn(@click="save()") save

      template(v-slot:item.action="{item}")  
        v-icon(small, @click="editItem(item, index)").mr-2 {{svgPath.mdiPencil}}
        v-icon(small, @click="deleteItem(item, index)").mr-2 {{svgPath.mdiTrashCan}}
</template>

<script>
import Sortable from 'sortablejs'
import { mdiPencil, mdiTrashCan } from '@mdi/js'
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted() {
    let tables = document.querySelectorAll('.v-data-table tbody')
    const _self = this
    tables.forEach((table, index) => {
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
          _self.setSpliceTraining(payload)
        }
      })
    })
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
      }
    })
  },
  data() {
    return {
      svgPath: {
        mdiPencil,
        mdiTrashCan
      },
      dialog: false,
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
      ]
    }
  },
  methods: {
    ...mapActions({
      setTrainings: 'trainings/trainings',
      setSpliceTraining: 'trainings/spliceTraining',
      setDeleteTraining: 'trainings/deleteTraining',
      setSpliceTable: 'trainings/spliceTable'
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
      const payload = {
        editedItem: this.editedItem,
        editedIndex: this.editedIndex,
        tableIndex: this.tableIndex
      }
      this.setTrainings(payload)
      this.close()
    },
    deleteItem: function(item, index) {
      if (confirm('Are you sure you want to delete this item?')) {
        const payload = {
          tableIndex: index,
          index: this.getTrainings[index].exercises.indexOf(item)
        }
        this.setDeleteTraining(payload)
      } else {
        return
      }
    }
  },
  computed: {
    ...mapGetters({
      getTrainings: 'trainings/trainings'
    }),
    formTitle() {
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
</style>