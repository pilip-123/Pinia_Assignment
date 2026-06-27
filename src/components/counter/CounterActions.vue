<script setup>
defineEmits(["increment", "decrement", "reset"]);
</script>

<template>
  <div class="flex gap-2 mt-4">
    <button
      class="bg-green-500 text-white px-4 py-2 rounded"
      @click="$emit('increment')"
    >
      Increment
    </button>
    <button
      class="bg-red-500 text-white px-4 py-2 rounded"
      @click="$emit('decrement')"
    >
      Decrement
    </button>
    <button
      class="bg-gray-500 text-white px-4 py-2 rounded"
      @click="$emit('reset')"
    >
      Reset
    </button>
  </div>
</template>
