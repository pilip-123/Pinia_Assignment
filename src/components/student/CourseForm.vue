<script setup>
import { ref } from "vue";

const emit = defineEmits(["addCourse"]);

const form = ref({ name: "", credits: 3 });

function submit() {
  if (form.value.name.trim()) {
    emit("addCourse", { ...form.value });
    form.value = { name: "", credits: 3 };
  }
}
</script>

<template>
  <div class="flex gap-2 mb-3">
    <input
      v-model="form.name"
      placeholder="Course name"
      class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <input
      v-model.number="form.credits"
      type="number"
      min="1"
      max="6"
      class="border rounded px-2 py-1 text-sm w-16 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <button
      class="bg-blue-500 text-white px-3 py-1 rounded text-sm"
      @click="submit"
    >
      Add
    </button>
  </div>
</template>
