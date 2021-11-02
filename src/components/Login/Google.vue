<template>
  <section class="my-5 text-center">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default {
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();

      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log(user);
          this.$emit("close-log-google");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
          const email = error.email;
          console.log(email);
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(credential);
        });
    },
  },
};
</script>

<style>
</style>