<template>
  <section class="max-w-screen-2xl mb-4 mx-auto">
    <!-- begin div -->
    <div class="flex justify-between items-center mb-2">
      <router-link class="w-44 h-44" to="/mainpage"
        ><img src="../../IMG/IMG-Logo/travel-logo.avif" alt="Logo"
      /></router-link>

      <!-- begin div -->
      <nav class="flex justify-end items-start gap-20 px-3 w-2/3 h-24">
        <!-- User loging/out -->
        <!-- <p class="text-2xl font-semibol text-gray-500">Hi! User Name</p> -->

        <ul class="text-sm flex justify-end gap-5">
          <li>
            <button>Language</button>
          </li>
          <li class="flex">
            <figure class="flex items-center">
              <ion-icon name="call-outline"></ion-icon>
            </figure>
            <p>+852 26832206</p>
          </li>
          <li>
            <a class="flex" href="#">
              <figure class="flex items-center">
                <ion-icon name="newspaper-sharp"></ion-icon>
              </figure>
              <p>My order</p>
            </a>
          </li>
          <li>
            <button @click="signup()">Sign Up</button>
            <button @click="login()">/Login</button>
          </li>
        </ul>
      </nav>
      <!-- end div -->
    </div>
    <!-- end div -->

    <h1 class="text-center font-bold text-4xl mb-2">
      Welcome to Big Big Holiday
    </h1>
    <!-- begin div -->
    <div class="flex justify-center gap-6">
      <button>
        <el-icon><DArrowLeft /></el-icon>
      </button>
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100"
        to="/tourgroup"
        ><el-icon><Edit /></el-icon>Tour Group</router-link
      >
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 text-center"
        to="/notification"
        ><el-icon><Document /></el-icon>Notification</router-link
      >
      <button>
        <el-icon><DArrowRight /></el-icon>
      </button>
    </div>
    <!-- end div -->
  </section>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    function signup() {
      store.dispatch("signup");
    }

    function login() {
      store.dispatch("login");
    }

    return {
      signup,
      login,
    };
  },
};
</script>
