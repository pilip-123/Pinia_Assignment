import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [
      { id: 1, name: "Laptop", price: 900 },
      { id: 2, name: "Mouse", price: 20 },
      { id: 3, name: "Keyboard", price: 50 },
    ],
    cart: [],
  }),

  getters: {
    totalPrice: (state) => state.cart.reduce((sum, item) => sum + item.price, 0),
    totalItems: (state) => state.cart.length,
  },

  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = [];
    },
  },
});
