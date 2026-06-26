<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore();
const newTodo = ref("");
const filter = ref("all");

function addTodo() {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim());
    newTodo.value = "";
  }
}

const filteredTodos = {
  all: todoStore.todos,
  pending: todoStore.pendingTodos,
  completed: todoStore.completedTodos,
};
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">Todo Store</h2>

    <div class="flex gap-2 mb-4">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        class="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        type="text"
        placeholder="Add a new todo..."
      />
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="addTodo"
      >
        Add
      </button>
    </div>

    <div class="flex gap-4 mb-4 text-sm dark:text-gray-300">
      <span>Total: <strong>{{ todoStore.totalTodos }}</strong></span>
      <span>Pending: <strong>{{ todoStore.pendingTodos.length }}</strong></span>
      <span>Completed: <strong>{{ todoStore.completedTodos.length }}</strong></span>
    </div>

    <div class="flex gap-2 mb-4">
      <button
        v-for="f in ['all', 'pending', 'completed']"
        :key="f"
        :class="[
          'px-3 py-1 rounded text-sm',
          filter === f
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200',
        ]"
        @click="filter = f"
      >
        {{ f.charAt(0).toUpperCase() + f.slice(1) }}
      </button>
    </div>

    <ul v-if="filteredTodos[filter].length" class="space-y-2">
      <li
        v-for="todo in filteredTodos[filter]"
        :key="todo.id"
        class="flex items-center gap-2 dark:text-gray-300"
      >
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="todoStore.toggleTodo(todo.id)"
        />
        <span
          :class="{ 'line-through text-gray-400': todo.completed }"
          class="flex-1"
        >
          {{ todo.title }}
        </span>
        <button
          class="text-red-500 text-sm"
          @click="todoStore.removeTodo(todo.id)"
        >
          Remove
        </button>
      </li>
    </ul>
    <p v-else class="text-gray-500 dark:text-gray-400">No todos yet.</p>
  </div>
</template>
