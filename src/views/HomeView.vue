<script setup>
import { useThemeStore } from "../stores/themeStore";

const theme = useThemeStore();
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 p-10 rounded shadow transition-colors text-center"
  >
    <h1 class="text-3xl font-bold mb-4 dark:text-white">Pinia Assignment</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
     Pinia is the official state management library for Vue.js. It is used to 
     store and share data between multiple Vue components without passing props 
     through many levels of components.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
      <router-link
        v-for="{ to, label, desc } in [
          { to: '/counter', label: 'Counter', desc: 'Increment, decrement, reset' },
          { to: '/user', label: 'User', desc: 'Edit profile fields' },
          { to: '/todos', label: 'Todos', desc: 'Add, filter, complete' },
          { to: '/cart', label: 'Cart', desc: 'Products & cart' },
          { to: '/students', label: 'Students', desc: 'Manage students & courses' },
        ]"
        :key="to"
        :to="to"
        class="block p-4 rounded border dark:border-gray-600 hover:shadow-md transition-shadow"
        :class="
          theme.darkMode
            ? 'bg-gray-700 text-white'
            : 'bg-blue-50 text-gray-800'
        "
      >
        <div class="font-semibold">{{ label }}</div>
        <div class="text-xs mt-1 opacity-70">{{ desc }}</div>
      </router-link>
    </div>
  </div>
</template>
