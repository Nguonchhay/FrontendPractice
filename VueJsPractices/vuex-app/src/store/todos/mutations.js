export default {
    addToDo(state, payload) {
      state.todos.push(payload)
    },
    addToDos(state, payload = []) {
      state.todos = payload
    },
    editToDo(state, payload) {
      state.todos = state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.todo
        }
        return todo
      })
    },
    deleteToDo(state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload)
    }
}