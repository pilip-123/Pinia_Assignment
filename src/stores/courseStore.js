import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", {
  state: () => ({
    courses: [
      { id: 1, name: "Mathematics", credits: 3 },
      { id: 2, name: "Physics", credits: 4 },
    ],
  }),

  getters: {
    totalCourses: (state) => state.courses.length,
    totalCredits: (state) => state.courses.reduce((sum, c) => sum + c.credits, 0),
  },

  actions: {
    addCourse(course) {
      this.courses.push({ id: Date.now(), ...course });
    },
    removeCourse(id) {
      this.courses = this.courses.filter((c) => c.id !== id);
    },
  },
});
