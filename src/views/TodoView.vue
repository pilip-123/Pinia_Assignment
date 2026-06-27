<script setup>
import { ref, computed } from "vue";
import { useTodoStore } from "../stores/todoStore";
import TodoInput from "../components/todo/TodoInput.vue";
import TodoStats from "../components/todo/TodoStats.vue";
import TodoFilters from "../components/todo/TodoFilters.vue";
import TodoItem from "../components/todo/TodoItem.vue";

const todoStore = useTodoStore();
const filter = ref("all");

const filteredTodos = computed(() => {
  const map = {
    all: todoStore.todos,
    pending: todoStore.pendingTodos,
    completed: todoStore.completedTodos,
  };
  return map[filter.value];
});

function addTodo(title) {
  todoStore.addTodo(title);
}

function changeFilter(f) {
  filter.value = f;
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">Todo Store</h2>
    <TodoInput @add="addTodo" />
    <TodoStats
      :total="todoStore.totalTodos"
      :pending="todoStore.pendingTodos.length"
      :completed="todoStore.completedTodos.length"
    />
    <TodoFilters :active-filter="filter" @change-filter="changeFilter" />
    <ul v-if="filteredTodos.length" class="space-y-2">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="todoStore.toggleTodo"
        @remove="todoStore.removeTodo"
      />
    </ul>
    <p v-else class="text-gray-500 dark:text-gray-400">No todos yet.</p>
  </div>
</template>
