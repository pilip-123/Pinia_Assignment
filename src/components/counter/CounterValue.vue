<script setup>
defineProps({
  count: { type: Number, required: true },
  doubleCount: { type: Number, required: true },
});
</script>

<template>
  <p class="dark:text-gray-300">Current Count : {{ count }}</p>
  <p class="dark:text-gray-300">Double Count : {{ doubleCount }}</p>
</template>
