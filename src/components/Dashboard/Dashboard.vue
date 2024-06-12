<template>
  <div class="bg-gray-200 main">
    <div
      class="flex justify-between bg-white p-3 shadow-md text-blue-500 font-serif font-bold text-lg"
    >
      <div>Dashboard</div>
      <div class="flex space-x-3">
        <label for="auth_name"> <span>{{ user.first_name }}</span> <span>{{ user.last_name }}</span></label>
        <label for="logout" @click="logout">
          <RouterLink :to="{name:'login.view'}">Logout</RouterLink>
        </label>
      </div>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: false,
  },
});

function logout() {
  localStorage.removeItem("data")
}
</script>
<style scoped>
.main {
  height: 100vh;
  width: 100vw;
}
</style>
