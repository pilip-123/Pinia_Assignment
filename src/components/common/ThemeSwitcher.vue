import { useThemeStore } from "../../stores/themeStore";

<script setup>
import { useThemeStore } from "../../stores/themeStore";

const theme = useThemeStore();
</script>

<template>
  <button
    class="px-4 py-2 rounded border transition-colors"
    :class="
      theme.darkMode
        ? 'bg-gray-700 text-white border-gray-600'
        : 'bg-white text-gray-800 border-gray-300'
    "
    @click="theme.toggleTheme()"
  >
    {{ theme.darkMode ? "Light Mode" : "Dark Mode" }}
  </button>
</template>
