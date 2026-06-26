<script setup>
import { useCounterStore } from "../stores/counterStore";

const counter = useCounterStore();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">Counter Store</h2>

    <p class="dark:text-gray-300">Current Count : {{ counter.count }}</p>
    <p class="dark:text-gray-300">Double Count : {{ counter.doubleCount }}</p>

    <div class="flex gap-2 mt-4">
      <button
        class="bg-green-500 text-white px-4 py-2 rounded"
        @click="counter.increment()"
      >
        Increment
      </button>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded"
        @click="counter.decrement()"
      >
        Decrement
      </button>
      <button
        class="bg-gray-500 text-white px-4 py-2 rounded"
        @click="counter.reset()"
      >
        Reset
      </button>
    </div>
  </div>
</template>
