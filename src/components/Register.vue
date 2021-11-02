<template>
  <section
    @click="$emit('register-log')"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-40"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/4">
        <div class="p-2 border-2">
          <h1 class="text-2xl text-center">Register</h1>
          <form class="p-2 mx-2" @submit.prevent="register">
            <div class="my-5">
              <label> Email or Username</label>
              <input
                ref="emailRefReg"
                v-model="email"
                class="rounded shadow p-2 w-full"
                placeholder="Email or Username"
              />
            </div>
            <div class="my-5">
              <label> Password</label>
              <input
                v-model="password"
                class="rounded shadow p-2 w-full"
                placeholder="Password"
              />
            </div>
            <div class="my-5">
              <button
                type="submit"
                class="w-full rounded shadow-md bg-blue-400"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import app from "../utilities/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const register = () => {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    };
    return {
      register,
      email,
      password,
    };
  },
  mounted() {
    this.$refs.emailRefReg.focus();
  },
};
</script>

<style>
</style>