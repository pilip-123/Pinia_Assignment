<script setup>
defineProps({
  activeFilter: { type: String, required: true },
});

const emit = defineEmits(["changeFilter"]);

const filters = ["all", "pending", "completed"];
</script>

<template>
  <div class="flex gap-2 mb-4">
    <button
      v-for="f in filters"
      :key="f"
      :class="[
        'px-3 py-1 rounded text-sm',
        activeFilter === f
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200',
      ]"
      @click="emit('changeFilter', f)"
    >
      {{ f.charAt(0).toUpperCase() + f.slice(1) }}
    </button>
  </div>
</template>
