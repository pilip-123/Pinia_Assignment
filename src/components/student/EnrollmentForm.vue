<script setup>
import { ref } from "vue";

defineProps({
  students: { type: Array, required: true },
  courses: { type: Array, required: true },
});

const emit = defineEmits(["enroll"]);

const selectedStudent = ref(null);
const selectedCourse = ref(null);

function submit() {
  if (selectedStudent.value !== null && selectedCourse.value !== null) {
    emit("enroll", Number(selectedStudent.value), Number(selectedCourse.value));
  }
}
</script>

<template>
  <div>
    <h4 class="font-semibold mb-1 dark:text-white">Enroll Student</h4>
    <div class="flex gap-2">
      <select
        v-model="selectedStudent"
        class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option :value="null" disabled>Select student</option>
        <option
          v-for="s in students"
          :key="s.id"
          :value="s.id"
        >
          {{ s.name }}
        </option>
      </select>
      <select
        v-model="selectedCourse"
        class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option :value="null" disabled>Select course</option>
        <option
          v-for="c in courses"
          :key="c.id"
          :value="c.id"
        >
          {{ c.name }}
        </option>
      </select>
      <button
        class="bg-green-500 text-white px-3 py-1 rounded text-sm"
        @click="submit"
      >
        Enroll
      </button>
    </div>
  </div>
</template>
