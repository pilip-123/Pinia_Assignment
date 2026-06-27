<script setup>
import { useCartStore } from "../stores/cartStore";
import ProductCard from "../components/cart/ProductCard.vue";
import CartRow from "../components/cart/CartRow.vue";
import CartSummary from "../components/cart/CartSummary.vue";

const cart = useCartStore();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">Shopping Cart Store</h2>

    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2 dark:text-white">Products</h3>
      <div class="space-y-2">
        <ProductCard
          v-for="product in cart.products"
          :key="product.id"
          :product="product"
          @add-to-cart="cart.addToCart"
        />
      </div>
    </div>

    <CartSummary
      :total-items="cart.totalItems"
      :total-price="cart.totalPrice"
      :is-empty="!cart.cart.length"
      @clear-cart="cart.clearCart()"
    >
      <CartRow
        v-for="item in cart.cart"
        :key="item.id"
        :item="item"
        @remove="cart.removeFromCart"
      />
    </CartSummary>
  </div>
</template>
