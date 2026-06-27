<script setup>
import { useUserStore } from "../stores/userStore";
import UserCard from "../components/user/UserCard.vue";
import UserForm from "../components/user/UserForm.vue";

const user = useUserStore();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors">
    <h2 class="text-2xl font-bold mb-4 dark:text-white">User Store</h2>
    <UserCard :name="user.name" :age="user.age" :email="user.email" />
    <UserForm
      :name="user.name"
      :age="user.age"
      :email="user.email"
      @update:name="user.updateName($event)"
      @update:age="user.updateAge($event)"
      @update:email="user.updateEmail($event)"
    />
  </div>
</template>
