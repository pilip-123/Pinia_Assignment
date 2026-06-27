<script setup>
defineProps({
  totalItems: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  isEmpty: { type: Boolean, required: true },
});

const emit = defineEmits(["clearCart"]);
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold mb-2 dark:text-white">
      Cart ({{ totalItems }} items)
    </h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
      Total: ${{ totalPrice }}
    </p>
    <div v-if="!isEmpty" class="space-y-2">
      <slot />
      <button
        class="bg-red-500 text-white px-3 py-1 rounded text-sm mt-2"
        @click="emit('clearCart')"
      >
        Clear Cart
      </button>
    </div>
    <p v-else class="text-gray-500 dark:text-gray-400">Cart is empty.</p>
  </div>
</template>
