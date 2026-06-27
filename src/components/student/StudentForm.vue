<script setup>
import { ref } from "vue";

const emit = defineEmits(["addStudent"]);

const form = ref({ name: "", email: "", grade: "A" });

function submit() {
  if (form.value.name.trim()) {
    emit("addStudent", { ...form.value });
    form.value = { name: "", email: "", grade: "A" };
  }
}
</script>

<template>
  <div class="flex gap-2 mb-3">
    <input
      v-model="form.name"
      placeholder="Name"
      class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <input
      v-model="form.email"
      placeholder="Email"
      class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <select
      v-model="form.grade"
      class="border rounded px-2 py-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
    <button
      class="bg-blue-500 text-white px-3 py-1 rounded text-sm"
      @click="submit"
    >
      Add
    </button>
  </div>
</template>
