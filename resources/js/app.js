require('./bootstrap');
window.Vue = require('vue');

Vue.component('todo', require('./components/Todo'))
Vue.component('new-todo', require('./components/NewTodo.vue'))
Vue.component('todo-list', require('./components/TodoList'))
Vue.component('todo-app', require('./components/TodoApp').default)
import store from '../js/store'

const app = new Vue({
    el: '#app',
    store
});
