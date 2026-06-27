<script setup>
defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits(["addToCart"]);
</script>

<template>
  <div
    class="flex items-center justify-between border p-3 rounded dark:border-gray-600 dark:text-gray-300"
  >
    <span>{{ product.name }} - ${{ product.price }}</span>
    <button
      class="bg-green-500 text-white px-3 py-1 rounded text-sm"
      @click="emit('addToCart', product)"
    >
      Add to Cart
    </button>
  </div>
</template>
