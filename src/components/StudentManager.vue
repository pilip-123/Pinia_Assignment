<script setup>
import { ref } from "vue";
import { useStudentStore } from "../stores/studentStore";
import { useCourseStore } from "../stores/courseStore";
import { useEnrollmentStore } from "../stores/enrollmentStore";

const studentStore = useStudentStore();
const courseStore = useCourseStore();
const enrollmentStore = useEnrollmentStore();

const showBonus = ref(false);
const newStudent = ref({ name: "", email: "", grade: "A" });
const newCourse = ref({ name: "", credits: 3 });
const selectedStudent = ref(null);
const selectedCourse = ref(null);

function addStudent() {
  if (newStudent.value.name.trim()) {
    studentStore.addStudent({ ...newStudent.value });
    newStudent.value = { name: "", email: "", grade: "A" };
  }
}

function addCourse() {
  if (newCourse.value.name.trim()) {
    courseStore.addCourse({ ...newCourse.value });
    newCourse.value = { name: "", credits: 3 };
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

function enroll() {
  if (selectedStudent.value && selectedCourse.value) {
    enrollmentStore.enrollStudent(
      Number(selectedStudent.value),
      Number(selectedCourse.value)
    );
  }
}

function isEnrolled(studentId, courseId) {
  return enrollmentStore.enrollments.some(
    (e) => e.studentId === studentId && e.courseId === courseId
  );
}

function toggleEnrollment(studentId, courseId) {
  if (isEnrolled(studentId, courseId)) {
    enrollmentStore.unenrollStudent(studentId, courseId);
  } else {
    enrollmentStore.enrollStudent(studentId, courseId);
  }
}

function courseName(courseId) {
  const c = courseStore.courses.find((c) => c.id === courseId);
  return c ? c.name : "Unknown";
}

function gradeCounts() {
  const counts = studentStore.studentCountByGrade;
  return Object.entries(counts)
    .map(([grade, count]) => `${grade}: ${count}`)
    .join(", ");
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold dark:text-white">
        Bonus: Student Management System
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
        <div class="border rounded p-4 dark:border-gray-600">
          <h3 class="font-semibold mb-2 dark:text-white">Student Stats</h3>
          <p class="text-sm dark:text-gray-300">
            Total: <strong>{{ studentStore.totalStudents }}</strong> |
            Top (A): <strong>{{ studentStore.topStudents.length }}</strong> |
            {{ gradeCounts() }}
          </p>
        </div>
        <div class="border rounded p-4 dark:border-gray-600">
          <h3 class="font-semibold mb-2 dark:text-white">Course Stats</h3>
          <p class="text-sm dark:text-gray-300">
            Total: <strong>{{ courseStore.totalCourses }}</strong> |
            Credits: <strong>{{ courseStore.totalCredits }}</strong>
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-2 dark:text-white">Students</h3>
          <div class="flex gap-2 mb-3">
            <input
              v-model="newStudent.name"
              placeholder="Name"
              class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              v-model="newStudent.email"
              placeholder="Email"
              class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <select
              v-model="newStudent.grade"
              class="border rounded px-2 py-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              @click="addStudent"
            >
              Add
            </button>
          </div>
          <div class="space-y-2 max-h-64 overflow-y-auto">
            <div
              v-for="s in studentStore.students"
              :key="s.id"
              class="border rounded p-2 text-sm dark:border-gray-600 dark:text-gray-300 flex items-center justify-between"
            >
              <div>
                <strong>{{ s.name }}</strong> ({{ s.grade }})
                <span class="text-gray-500">- {{ s.email }}</span>
              </div>
              <button
                class="text-red-500 text-xs"
                @click="removeStudent(s.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2 dark:text-white">Courses</h3>
          <div class="flex gap-2 mb-3">
            <input
              v-model="newCourse.name"
              placeholder="Course name"
              class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              v-model.number="newCourse.credits"
              type="number"
              min="1"
              max="6"
              class="border rounded px-2 py-1 text-sm w-16 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              @click="addCourse"
            >
              Add
            </button>
          </div>
          <div class="space-y-2 max-h-64 overflow-y-auto">
            <div
              v-for="c in courseStore.courses"
              :key="c.id"
              class="border rounded p-2 text-sm dark:border-gray-600 dark:text-gray-300 flex items-center justify-between"
            >
              <span><strong>{{ c.name }}</strong> ({{ c.credits }} credits)</span>
              <button
                class="text-red-500 text-xs"
                @click="removeCourse(c.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2 dark:text-white">
          Enrollment Matrix
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b dark:border-gray-600 dark:text-gray-300">
                <th class="text-left p-2">Student \ Course</th>
                <th
                  v-for="c in courseStore.courses"
                  :key="c.id"
                  class="p-2 text-center"
                >
                  {{ c.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="s in studentStore.students"
                :key="s.id"
                class="border-b dark:border-gray-600 dark:text-gray-300"
              >
                <td class="p-2">{{ s.name }}</td>
                <td
                  v-for="c in courseStore.courses"
                  :key="c.id"
                  class="p-2 text-center"
                >
                  <input
                    type="checkbox"
                    :checked="isEnrolled(s.id, c.id)"
                    @change="toggleEnrollment(s.id, c.id)"
                  />
                </td>
              </tr>
              <tr v-if="!studentStore.students.length || !courseStore.courses.length">
                <td
                  :colspan="Math.max(2, courseStore.courses.length + 1)"
                  class="p-2 text-center text-gray-500 dark:text-gray-400"
                >
                  Add students and courses to manage enrollments.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 class="font-semibold mb-1 dark:text-white">Enroll Student</h4>
          <div class="flex gap-2">
            <select
              v-model="selectedStudent"
              class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option :value="null" disabled>Select student</option>
              <option
                v-for="s in studentStore.students"
                :key="s.id"
                :value="s.id"
              >
                {{ s.name }}
              </option>
            </select>
            <select
              v-model="selectedCourse"
              class="border rounded px-2 py-1 text-sm flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option :value="null" disabled>Select course</option>
              <option
                v-for="c in courseStore.courses"
                :key="c.id"
                :value="c.id"
              >
                {{ c.name }}
              </option>
            </select>
            <button
              class="bg-green-500 text-white px-3 py-1 rounded text-sm"
              @click="enroll"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
