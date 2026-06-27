<script setup>
defineProps({
  total: { type: Number, required: true },
  pending: { type: Number, required: true },
  completed: { type: Number, required: true },
});
</script>

<template>
  <div class="flex gap-4 mb-4 text-sm dark:text-gray-300">
    <span>Total: <strong>{{ total }}</strong></span>
    <span>Pending: <strong>{{ pending }}</strong></span>
    <span>Completed: <strong>{{ completed }}</strong></span>
  </div>
</template>
