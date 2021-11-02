<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-40"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/4">
        <div class="p-2 border-2">
          <h1 class="text-2xl text-center">Login</h1>
          <Google @close-log-google="close" />

          <form class="p-2 mx-2" @submit.prevent="submit">
            <div class="my-5">
              <label> Email or Username</label>
              <input
                ref="emailRef"
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
                class="w-full rounded shadow-md bg-green-400"
              >
                <span v-if="!isLoading"> Login </span>
                <span v-else>.....</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from "../utilities/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Google from "../components/Login/Google.vue";
export default {
  components: { Google },
  data() {
    return {
      email: "test@gmail.com",
      password: "M123456",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          this.$emit("user-logged", user);
          (this.email = ""),
            (this.password = ""),
            (this.isLoading = false),
            this.close();
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },

    close() {
      this.$emit("close-log");
    },
  },
};
</script>

<style>
</style>

