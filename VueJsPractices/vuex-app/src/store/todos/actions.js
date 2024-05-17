import Axios from 'axios';

const apiBaseUrl = 'http://localhost:8085'

export default {
    listToDoAction({commit}) {
      Axios.get(`${apiBaseUrl}/todos`)
        .then(res => {
          commit('addToDos', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToDoAction({commit}, payload) {
      Axios.post(`${apiBaseUrl}/todos`, {
        title: payload
      })
      .then(res => {
        commit('addToDo', res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    editToDoAction({state, commit}, payload) {
      Axios.put(`${apiBaseUrl}/todos/${payload.id}`, {
        title: payload.todo
      })
      .then(() => {
        commit('editToDo', state, payload)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteToDoAction({commit}, payload) {
      Axios.delete(`${apiBaseUrl}/todos/${payload}`)
      .then(() => {
        commit('deleteToDo', payload)
      })
      .catch(err => {
        console.log(err)
      })
    }
}