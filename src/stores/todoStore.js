import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),

  getters: {
    pendingTodos: (state) => state.todos.filter((t) => !t.completed),
    completedTodos: (state) => state.todos.filter((t) => t.completed),
  },

  actions: {
    addTodo(title) {
      this.todos.push({
        id: Date.now(),
        title,
        completed: false,
      });
    },
    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
});
