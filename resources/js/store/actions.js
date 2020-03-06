import axios from 'axios';

let actions = {
  ADD_TODO({commit}, todo) {
    axios.post('/api/todos', todo)
    .then(res => {
        commit('ADD_TODO', res.data.todo);
        commit('CLEAR_NEW_TODO');
    }).catch(err => {
      console.error(err)
    })
  },
  TOGGLE_COMPLETE({commit}, todo) {
    axios.put(`/api/todos/${todo.id}`, {
        completed: !todo.completed
    })
    .then(res => {
        commit('TOGGLE_COMPLETE', todo);
    }).catch(err => {
      console.error(err)
    })
  },
  DELETE_TODO({commit}, todo) {
    axios.delete(`/api/todos/${todo.id}`)
    .then(res => {
      commit('DELETE_TODO', todo);
    }).catch(err => {
      console.error(err)
    })
  },
  GET_TODOS({commit}) {
    axios.get('/api/todos')
    .then(res => {
      commit('GET_TODOS', res.data.todos)
    }).catch(err => {
        console.error(err)
    })
  }
}

export default actions
