import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    trainings: []
  },
  mutations: {
    uploadTrainings: (state, payload) => {
      state.trainings = payload
    },
    changeTraining: (state, payload) => {
      Object.assign(
        state.trainings[payload.tableIndex].exercises[payload.editedIndex],
        payload.editedItem
      )
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    addTraining: (state, payload) => {
      state.trainings[payload.tableIndex].exercises.push(payload.editedItem)
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    deleteTraining: (state, payload) => {
      state.trainings[payload.tableIndex].exercises.splice(payload.index, 1)
      Vue.localStorage.set(
        'trainings',
        JSON.stringify(Object.assign([], state.trainings))
      )
    },
    spliceTraining: (state, payload) => {
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
    }
  },
  actions: {
    trainings: ({ commit }, payload) => {
      if (payload.editedIndex > -1) {
        commit('changeTraining', payload)
      } else {
        commit('addTraining', payload)
      }
    },
    deleteTraining: ({ commit }, payload) => {
      commit('deleteTraining', payload)
    },
    spliceTraining: ({ commit }, payload) => {
      commit('spliceTraining', payload)
    },
    uploadTrainings: ({ commit }, payload) => {
      commit('uploadTrainings', payload)
    }
  },
  getters: {
    trainings: state => {
      return state.trainings
    }
  }
}
