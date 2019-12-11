import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    trainings: [],
    selectedTrainingName: '',
    followTraining: false,
    selectedTraining: {}
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
      state.trainings.forEach((element, index) => {
        if (element.name == payload.trainingName) {
          state.trainings[index].exercises.push(payload.editedItem)
        }
      })
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
    selectedTrainingName: (state, payload) => {
      state.selectedTrainingName = payload
      Vue.localStorage.set('selectedTrainingName', state.selectedTrainingName)
    },
    followTraining: (state, payload) => {
      state.followTraining = payload
      Vue.localStorage.set('followTraining', payload)
    },
    selectedTraining: (state, payload) => {
      const value = state.trainings.find(element => element.name == payload)
      let name = ''
      let exercises = []
      if (value != undefined) {
        name = value.name
        value.exercises.forEach(el => {
          exercises.push({
            ...el
          })
        })
      }
      state.selectedTraining =
        value == undefined ? undefined : { name, exercises }
    },
    spliceSelectedTraining: state => {
      if (state.selectedTraining.exercises.length > 0) {
        state.selectedTraining.exercises.splice(0, 1)
      }
      if (state.selectedTraining.exercises.length == 0) {
        state.followTraining = false
        state.selectedTraining = undefined
      }
    }
  },
  actions: {
    exercice: ({ commit }, payload) => {
      if (payload.new) {
        payload['selectedTrainings'].forEach(element => {
          commit('addExercice', {
            trainingName: element,
            editedItem: payload.editedItem
          })
        })
      } else {
        console.log('edit item')
      }
      /*       if (payload.editedIndex > -1) {
        commit('changeExercice', payload)
      } else {
        commit('addExercice', payload)
      } */
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
      commit('addTable', payload.toLowerCase())
    },
    uploadTrainings: ({ commit }, payload) => {
      console.log(payload)
      commit('uploadTrainings', payload)
    },
    deleteTable: ({ commit }, payload) => {
      commit('deleteTable', payload)
    },
    selectedTrainingName: ({ commit }, payload) => {
      commit('selectedTrainingName', payload)
      commit('selectedTraining', payload)
      /* if (state.followTraining) {
        commit('selectedTraining')
      } */
    },
    followTraining: ({ commit, state }, payload) => {
      commit('followTraining', payload)
      if (
        payload &&
        state.selectedTrainingName &&
        state.selectedTrainingName != state.selectedTraining.name
      ) {
        commit('selectedTraining')
      }
    },
    spliceSelectedTraining: ({ commit }) => {
      commit('spliceSelectedTraining')
    }
  },
  getters: {
    trainings: state => {
      return state.trainings
    },
    nameTrainings: state => {
      const nameTrainings = state.trainings.map(element => element.name)
      return nameTrainings
    },
    selectedTrainingName: state => {
      return state.selectedTrainingName
    },
    followTraining: state => {
      return state.followTraining
    },
    selectedTraining: state => {
      return state.selectedTraining
    }
  }
}
