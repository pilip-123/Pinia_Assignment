<script setup>
defineProps({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});
</script>

<template>
  <div class="space-y-2 mb-4 dark:text-gray-300">
    <p>Name: <strong class="dark:text-white">{{ name }}</strong></p>
    <p>Age: <strong class="dark:text-white">{{ age }}</strong></p>
    <p>Email: <strong class="dark:text-white">{{ email }}</strong></p>
  </div>
</template>
