<template>
  <li class="todo" :class="{ completed: todo.completed }">
    <div class="view">
      <input type="checkbox" v-model="todo.completed" class="toggle" @click="toggleTodo(todo)">
      <label>{{todo.title}}</label>
      <button @click="removeTodo(todo)" class="destroy"></button>
    </div>
  </li>
</template>
<script>
export default {
  name: "Todo",
  props: ["todo"],

  methods: {
    removeTodo(todo) {
      this.$store.dispatch("DELETE_TODO", todo);
    },
    toggleTodo(todo) {
      this.$store.dispatch("TOGGLE_COMPLETE", todo);
    }
  }
};
</script>
