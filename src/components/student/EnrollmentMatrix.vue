<script setup>
const props = defineProps({
  students: { type: Array, required: true },
  courses: { type: Array, required: true },
  enrollments: { type: Array, required: true },
});

const emit = defineEmits(["toggle"]);

function isEnrolled(studentId, courseId) {
  return props.enrollments.some(
    (e) => e.studentId === studentId && e.courseId === courseId
  );
}
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold mb-2 dark:text-white">
      Enrollment Matrix
    </h3>
    <div class="overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="border-b dark:border-gray-600 dark:text-gray-300">
            <th class="text-left p-2">Student \ Course</th>
            <th
              v-for="c in courses"
              :key="c.id"
              class="p-2 text-center"
            >
              {{ c.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="s in students"
            :key="s.id"
            class="border-b dark:border-gray-600 dark:text-gray-300"
          >
            <td class="p-2">{{ s.name }}</td>
            <td
              v-for="c in courses"
              :key="c.id"
              class="p-2 text-center"
            >
              <input
                type="checkbox"
                :checked="isEnrolled(s.id, c.id)"
                @change="emit('toggle', s.id, c.id)"
              />
            </td>
          </tr>
          <tr v-if="!students.length || !courses.length">
            <td
              :colspan="Math.max(2, courses.length + 1)"
              class="p-2 text-center text-gray-500 dark:text-gray-400"
            >
              Add students and courses to manage enrollments.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
