import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    trainings: [],
    selectedTraining: ''
  },
  mutations: {
    uploadTrainings: (state, payload) => {
      state.trainings = payload
    },
    changeExercice: (state, payload) => {
      Object.assign(
        state.trainings[payload.tableIndex].exercises[payload.editedIndex],
        payload.editedItem
      )
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    addExercice: (state, payload) => {
      state.trainings[payload.tableIndex].exercises.push(payload.editedItem)
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    deleteExercice: (state, payload) => {
      state.trainings[payload.tableIndex].exercises.splice(payload.index, 1)
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    spliceExercice: (state, payload) => {
      const rowSelected = state.trainings[payload.tableIndex].exercises.splice(
        payload.oldIndex,
        1
      )[0]
      state.trainings[payload.tableIndex].exercises.splice(
        payload.newIndex,
        0,
        rowSelected
      )
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    spliceTable: (state, payload) => {
      const tableSelected = state.trainings.splice(payload.oldIndex, 1)[0]
      state.trainings.splice(payload.newIndex, 0, tableSelected)
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    addTable: (state, payload) => {
      state.trainings.push({
        name: payload,
        exercises: []
      })
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    deleteTable: (state, payload) => {
      state.trainings.splice(payload, 1)
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    selectedTraining: (state, payload) => {
      state.selectedTraining = payload
    }
  },
  actions: {
    exercices: ({ commit }, payload) => {
      if (payload.editedIndex > -1) {
        commit('changeExercice', payload)
      } else {
        commit('addExercice', payload)
      }
    },
    deleteExercice: ({ commit }, payload) => {
      commit('deleteExercice', payload)
    },
    spliceExercice: ({ commit }, payload) => {
      commit('spliceExercice', payload)
    },
    spliceTable: ({ commit }, payload) => {
      commit('spliceTable', payload)
    },
    addTable: ({ commit }, payload) => {
      commit('addTable', payload)
    },
    uploadTrainings: ({ commit }, payload) => {
      commit('uploadTrainings', payload)
    },
    deleteTable: ({ commit }, payload) => {
      commit('deleteTable', payload)
    },
    selectedTraining: ({ commit }, payload) => {
      commit('selectedTraining', payload)
    }
  },
  getters: {
    trainings: state => {
      return state.trainings
    },
    nameTrainings: state => {
      const nameTrainings = state.trainings.map(element => {
        return element.name
      })
      return nameTrainings
    },
    selectedTraining: state => {
      return state.trainings.filter(training => {
        if (training.name == state.selectedTraining) {
          return true
        }
      })
    }
  }
}
