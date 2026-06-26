<script setup>
import { useCartStore } from "../stores/cartStore";

const cart = useCartStore();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">Shopping Cart Store</h2>

    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2 dark:text-white">Products</h3>
      <div class="space-y-2">
        <div
          v-for="product in cart.products"
          :key="product.id"
          class="flex items-center justify-between border p-3 rounded dark:border-gray-600 dark:text-gray-300"
        >
          <span>{{ product.name }} - ${{ product.price }}</span>
          <button
            class="bg-green-500 text-white px-3 py-1 rounded text-sm"
            @click="cart.addToCart(product)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2 dark:text-white">
        Cart ({{ cart.totalItems }} items)
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Total: ${{ cart.totalPrice }}</p>
      <div v-if="cart.cart.length" class="space-y-2">
        <div
          v-for="item in cart.cart"
          :key="item.id"
          class="flex items-center justify-between border p-3 rounded dark:border-gray-600 dark:text-gray-300"
        >
          <span>{{ item.name }} - ${{ item.price }}</span>
          <button
            class="text-red-500 text-sm"
            @click="cart.removeFromCart(item.id)"
          >
            Remove
          </button>
        </div>
        <button
          class="bg-red-500 text-white px-3 py-1 rounded text-sm mt-2"
          @click="cart.clearCart()"
        >
          Clear Cart
        </button>
      </div>
      <p v-else class="text-gray-500 dark:text-gray-400">Cart is empty.</p>
    </div>
  </div>
</template>
