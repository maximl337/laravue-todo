let mutations = {
  ADD_TODO(state, todo) {
    state.todos.unshift(todo)
  },
  CLEAR_NEW_TODO(state) {
    state.newTodo = Object.assign({}, {
        title: '',
        completed: false
    })
  },
  TOGGLE_COMPLETE(state, nextTodo) {
    state.todos = state.todos.map(todo => {
      if(todo.id === nextTodo.id) {
        return {
          ...todo,
          completed: nextTodo.completed
        }
      }
      return todo;
    })
  },
  GET_TODOS(state, todos) {
    state.todos = todos
  },
  DELETE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  }
}

export default mutations
