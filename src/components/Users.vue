<script setup>
import { useUserStore } from "../stores/userStore";

const user = useUserStore();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">User Store</h2>

    <div class="space-y-2 mb-4 dark:text-gray-300">
      <p>Name: <strong class="dark:text-white">{{ user.name }}</strong></p>
      <p>Age: <strong class="dark:text-white">{{ user.age }}</strong></p>
      <p>Email: <strong class="dark:text-white">{{ user.email }}</strong></p>
    </div>

    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
        <input
          v-model="user.name"
          class="border rounded px-3 py-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          type="text"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 dark:text-gray-300">Age</label>
        <input
          v-model.number="user.age"
          class="border rounded px-3 py-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          type="number"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
        <input
          v-model="user.email"
          class="border rounded px-3 py-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          type="email"
        />
      </div>
    </div>
  </div>
</template>
