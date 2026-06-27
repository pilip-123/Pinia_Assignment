<script setup>
defineProps({
  student: { type: Object, required: true },
});

const emit = defineEmits(["remove"]);
</script>

<template>
  <div
    class="border rounded p-2 text-sm dark:border-gray-600 dark:text-gray-300 flex items-center justify-between"
  >
    <div>
      <strong>{{ student.name }}</strong> ({{ student.grade }})
      <span class="text-gray-500">- {{ student.email }}</span>
    </div>
    <button
      class="text-red-500 text-xs"
      @click="emit('remove', student.id)"
    >
      Remove
    </button>
  </div>
</template>
