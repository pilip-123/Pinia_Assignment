<script setup>
defineProps({
  todo: { type: Object, required: true },
});

const emit = defineEmits(["toggle", "remove"]);
</script>

<template>
  <li class="flex items-center gap-2 dark:text-gray-300">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="emit('toggle', todo.id)"
    />
    <span
      :class="{ 'line-through text-gray-400': todo.completed }"
      class="flex-1"
    >
      {{ todo.title }}
    </span>
    <button
      class="text-red-500 text-sm"
      @click="emit('remove', todo.id)"
    >
      Remove
    </button>
  </li>
</template>
