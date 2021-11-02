<template>
  <AppHeader
    :isLoggedIn="isLoggedIn"
    @logout="logout"
    @login-model="loginOpen = true"
    @register-model="registerOpen = true"
  />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModel
      v-if="loginOpen"
      @user-logged="checkLogin"
      @close-log="loginOpen = false"
    />
  </teleport>
  <Register v-if="registerOpen" @register-log="registerOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModel from "./components/LoginModel.vue";
import Register from "./components/Register.vue";
import { getAuth, signOut } from "firebase/auth";

export default {
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      console.log(user);
      this.$store.commit("setIsLoggedIn");
      this.$store.commit("setAuthUser", user);
      this.isLoggedIn = true;
      this.authUser = user;
    } else {
      console.log("No User");
      this.isLoggedIn = false;
      this.authUser = {};
    }
  },
  data() {
    return {
      loginOpen: false,
      registerOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  methods: {
    checkLogin() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        console.log(user);
        //console.log(user);
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        console.log("No User");
        this.isLoggedIn = false;
        this.authUser = {};
      }
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.checkLogin()
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  components: { AppHeader, LoginModel, Register },
};
</script>

<style>
</style>
