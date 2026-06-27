<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);
const newTodo = ref("");

function submit() {
  if (newTodo.value.trim()) {
    emit("add", newTodo.value.trim());
    newTodo.value = "";
  }
}
</script>

<template>
  <div class="flex gap-2 mb-4">
    <input
      v-model="newTodo"
      @keyup.enter="submit"
      class="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      type="text"
      placeholder="Add a new todo..."
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded"
      @click="submit"
    >
      Add
    </button>
  </div>
</template>
