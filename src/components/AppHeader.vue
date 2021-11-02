<template>
  <nav class="w-full bg-gray-800 text-white px-6 py-4">
    <router-link class="mx-3" to="/counturies"> Counturies </router-link>
    <router-link class="mx-3" to="/calendar"> Calendar </router-link>
    <router-link class="mx-3" to="/slider"> Slider </router-link>
    <router-link class="mx-3" to="/calculator"> Calculator </router-link>
    <router-link class="mx-3" to="/modal"> Modal </router-link>
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('login-model')">Login</button>
    <button class="mx-2" @click="$emit('register-model')">Register</button>
  </nav>
</template>

<script>
export default {
  props: ["isLoggedIn"],
  methods: {
    logout() {
      this.$emit('logout')
    }
  }
};
</script>

<style>
</style>