<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const links = [
  { to: "/", name: "home", label: "Home" },
  { to: "/counter", name: "counter", label: "Counter" },
  { to: "/user", name: "user", label: "User" },
  { to: "/todos", name: "todos", label: "Todos" },
  { to: "/cart", name: "cart", label: "Cart" },
  { to: "/students", name: "students", label: "Students" },
];
</script>

<template>
  <nav class="flex gap-4">
    <router-link
      v-for="link in links"
      :key="link.name"
      :to="link.to"
      class="px-3 py-2 rounded text-sm font-medium transition-colors"
      :class="
        route.name === link.name
          ? 'bg-blue-500 text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      "
    >
      {{ link.label }}
    </router-link>
  </nav>
</template>
