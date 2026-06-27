<script setup>
import { useCounterStore } from "../stores/counterStore";
import CounterValue from "../components/counter/CounterValue.vue";
import CounterActions from "../components/counter/CounterActions.vue";

const counter = useCounterStore();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">Counter Store</h2>
    <CounterValue :count="counter.count" :double-count="counter.doubleCount" />
    <CounterActions
      @increment="counter.increment()"
      @decrement="counter.decrement()"
      @reset="counter.reset()"
    />
  </div>
</template>
