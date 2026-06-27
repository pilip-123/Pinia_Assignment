<script setup>
defineProps({
  item: { type: Object, required: true },
});

const emit = defineEmits(["remove"]);
</script>

<template>
  <div
    class="flex items-center justify-between border p-3 rounded dark:border-gray-600 dark:text-gray-300"
  >
    <span>{{ item.name }} - ${{ item.price }}</span>
    <button
      class="text-red-500 text-sm"
      @click="emit('remove', item.id)"
    >
      Remove
    </button>
  </div>
</template>
