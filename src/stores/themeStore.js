import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    darkMode: localStorage.getItem("darkMode") === "true",
  }),

  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.applyTheme();
    },

    applyTheme() {
      localStorage.setItem("darkMode", this.darkMode);
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
