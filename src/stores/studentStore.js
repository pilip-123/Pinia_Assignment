import { defineStore } from "pinia";

export const useStudentStore = defineStore("student", {
  state: () => ({
    students: [
      { id: 1, name: "Chavy yom", email: "chavyyom@gmail.com", grade: "A" },
      { id: 2, name: "Rida yom", email: "ridayom@gmail.com", grade: "B" },
      { id: 3, name: "Sara yom", email: "sarayom@gmail.com", grade: "A" },
    ],
  }),

  getters: {
    totalStudents: (state) => state.students.length,
    topStudents: (state) => state.students.filter((s) => s.grade === "A"),
    studentCountByGrade: (state) => {
      const counts = {};
      state.students.forEach((s) => {
        counts[s.grade] = (counts[s.grade] || 0) + 1;
      });
      return counts;
    },
  },

  actions: {
    addStudent(student) {
      this.students.push({ id: Date.now(), ...student });
    },
    updateStudent(id, updated) {
      const idx = this.students.findIndex((s) => s.id === id);
      if (idx !== -1) this.students[idx] = { ...this.students[idx], ...updated };
    },
    removeStudent(id) {
      this.students = this.students.filter((s) => s.id !== id);
    },
  },
});
