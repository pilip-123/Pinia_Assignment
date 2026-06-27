<script setup>
defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
</script>

<template>
  <div class="border rounded p-4 dark:border-gray-600">
    <h3 class="font-semibold mb-2 dark:text-white">{{ title }}</h3>
    <p class="text-sm dark:text-gray-300" v-html="content"></p>
  </div>
</template>
