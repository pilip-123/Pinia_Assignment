<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "./stores/themeStore";
import Counter from "./components/Counter.vue";
import Users from "./components/Users.vue";
import TodoList from "./components/TodoList.vue";
import Shopping from "./components/Shopping.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import StudentManager from "./components/StudentManager.vue";

const theme = useThemeStore();

onMounted(() => {
  theme.applyTheme();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
    <div class="max-w-6xl mx-auto p-10 space-y-8">
      <ThemeSwitcher />
      <Counter />
      <Users />
      <TodoList />
      <Shopping />
      <StudentManager />
    </div>
  </div>
</template>
