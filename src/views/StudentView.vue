<script setup>
import { ref } from "vue";
import { useStudentStore } from "../stores/studentStore";
import { useCourseStore } from "../stores/courseStore";
import { useEnrollmentStore } from "../stores/enrollmentStore";
import StatsCard from "../components/student/StatsCard.vue";
import StudentForm from "../components/student/StudentForm.vue";
import StudentRow from "../components/student/StudentRow.vue";
import CourseForm from "../components/student/CourseForm.vue";
import CourseRow from "../components/student/CourseRow.vue";
import EnrollmentMatrix from "../components/student/EnrollmentMatrix.vue";
import EnrollmentForm from "../components/student/EnrollmentForm.vue";

const studentStore = useStudentStore();
const courseStore = useCourseStore();
const enrollmentStore = useEnrollmentStore();

const showBonus = ref(false);

function addStudent(student) {
  studentStore.addStudent(student);
}

function addCourse(course) {
  courseStore.addCourse(course);
}

function enroll(studentId, courseId) {
  enrollmentStore.enrollStudent(studentId, courseId);
}

function toggleEnrollment(studentId, courseId) {
  const exists = enrollmentStore.enrollments.some(
    (e) => e.studentId === studentId && e.courseId === courseId
  );
  if (exists) {
    enrollmentStore.unenrollStudent(studentId, courseId);
  } else {
    enrollmentStore.enrollStudent(studentId, courseId);
  }
}

function removeStudent(id) {
  studentStore.removeStudent(id);
  enrollmentStore.enrollments = enrollmentStore.enrollments.filter(
    (e) => e.studentId !== id
  );
}

function removeCourse(id) {
  courseStore.removeCourse(id);
  enrollmentStore.enrollments = enrollmentStore.enrollments.filter(
    (e) => e.courseId !== id
  );
}

function gradeCounts() {
  const counts = studentStore.studentCountByGrade;
  return Object.entries(counts)
    .map(([grade, count]) => `${grade}: ${count}`)
    .join(" | ");
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold dark:text-white">
        Student Management System
      </h2>
      <button
        class="px-4 py-2 rounded text-sm"
        :class="
          showBonus
            ? 'bg-red-500 text-white'
            : 'bg-blue-500 text-white'
        "
        @click="showBonus = !showBonus"
      >
        {{ showBonus ? "Hide" : "Show" }}
      </button>
    </div>

    <div v-if="showBonus" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatsCard
          title="Student Stats"
          :content="`Total: <strong>${studentStore.totalStudents}</strong> | Top (A): <strong>${studentStore.topStudents.length}</strong> | ${gradeCounts()}`"
        />
        <StatsCard
          title="Course Stats"
          :content="`Total: <strong>${courseStore.totalCourses}</strong> | Credits: <strong>${courseStore.totalCredits}</strong>`"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-2 dark:text-white">Students</h3>
          <StudentForm @add-student="addStudent" />
          <div class="space-y-2 max-h-64 overflow-y-auto">
            <StudentRow
              v-for="s in studentStore.students"
              :key="s.id"
              :student="s"
              @remove="removeStudent"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2 dark:text-white">Courses</h3>
          <CourseForm @add-course="addCourse" />
          <div class="space-y-2 max-h-64 overflow-y-auto">
            <CourseRow
              v-for="c in courseStore.courses"
              :key="c.id"
              :course="c"
              @remove="removeCourse"
            />
          </div>
        </div>
      </div>

      <EnrollmentMatrix
        :students="studentStore.students"
        :courses="courseStore.courses"
        :enrollments="enrollmentStore.enrollments"
        @toggle="toggleEnrollment"
      />

      <EnrollmentForm
        :students="studentStore.students"
        :courses="courseStore.courses"
        @enroll="enroll"
      />
    </div>
  </div>
</template>
