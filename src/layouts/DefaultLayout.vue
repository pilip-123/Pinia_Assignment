<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "../stores/themeStore";
import ThemeSwitcher from "../components/common/ThemeSwitcher.vue";
import NavBar from "../components/common/NavBar.vue";

const theme = useThemeStore();

onMounted(() => {
  theme.applyTheme();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
    <div class="max-w-6xl mx-auto p-10 space-y-8">
      <div class="flex items-center justify-between">
        <NavBar />
        <ThemeSwitcher />
      </div>
      <router-view />
    </div>
  </div>
</template>
