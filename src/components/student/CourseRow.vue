<script setup>
defineProps({
  course: { type: Object, required: true },
});

const emit = defineEmits(["remove"]);
</script>

<template>
  <div
    class="border rounded p-2 text-sm dark:border-gray-600 dark:text-gray-300 flex items-center justify-between"
  >
    <span><strong>{{ course.name }}</strong> ({{ course.credits }} credits)</span>
    <button
      class="text-red-500 text-xs"
      @click="emit('remove', course.id)"
    >
      Remove
    </button>
  </div>
</template>
