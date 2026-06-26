import { defineStore } from "pinia";

export const useEnrollmentStore = defineStore("enrollment", {
  state: () => ({
    enrollments: [
      { studentId: 1, courseId: 1 },
      { studentId: 1, courseId: 2 },
      { studentId: 2, courseId: 1 },
    ],
  }),

  getters: {
    getStudentsByCourse: (state) => {
      return (courseId) =>
        state.enrollments
          .filter((e) => e.courseId === courseId)
          .map((e) => e.studentId);
    },
    getCoursesByStudent: (state) => {
      return (studentId) =>
        state.enrollments
          .filter((e) => e.studentId === studentId)
          .map((e) => e.courseId);
    },
  },

  actions: {
    enrollStudent(studentId, courseId) {
      const exists = this.enrollments.some(
        (e) => e.studentId === studentId && e.courseId === courseId
      );
      if (!exists) this.enrollments.push({ studentId, courseId });
    },
    unenrollStudent(studentId, courseId) {
      this.enrollments = this.enrollments.filter(
        (e) => !(e.studentId === studentId && e.courseId === courseId)
      );
    },
  },
});
