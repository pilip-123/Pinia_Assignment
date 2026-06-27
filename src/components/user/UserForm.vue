<script setup>
defineProps({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const emit = defineEmits(["update:name", "update:age", "update:email"]);
</script>

<template>
  <div class="space-y-3">
    <div>
      <label class="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
      <input
        :value="name"
        @input="emit('update:name', $event.target.value)"
        class="border rounded px-3 py-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        type="text"
      />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1 dark:text-gray-300">Age</label>
      <input
        :value="age"
        @input="emit('update:age', Number($event.target.value))"
        class="border rounded px-3 py-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        type="number"
      />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
      <input
        :value="email"
        @input="emit('update:email', $event.target.value)"
        class="border rounded px-3 py-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        type="email"
      />
    </div>
  </div>
</template>
