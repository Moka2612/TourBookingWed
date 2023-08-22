<template>
  <section v-if="onSignup" class="signup">
    <div
      class="my-8 mx-auto max-w-xl bg-gradient-to-r from-cyan-50 to-gray-50 drop-shadow-md shadow-2xl rounded-md"
    >
      <header class="text-3xl flex justify-end px-4 py-4">
        <button @click="closeModal()">
          <el-icon style="color: gray"><Close /></el-icon>
        </button>
      </header>
      <div class="max-w-sm mx-auto">
        <div class="mb-10">
          <ul
            class="w-52 mx-auto flex justify-between items-center text-2xl text-gray-400"
          >
            <li>
              <button class="text-gray-950">SIGN UP</button>
            </li>
            <li class="h-6 w-[1.5px] bg-gray-300"></li>
            <li><button @click="changeLogin()">LOGIN</button></li>
          </ul>
        </div>
        <form>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="idUser"
              name="idUser"
              type="text"
              placeholder="Set Your Login ID"
              v-model="idUser"
            />
          </fieldset>
          <fieldset class="w-[150px] mb-4 flex justify-between">
            <label class="w-14 flex items-center justify-between" for="sex"
              >Male <input id="male" name="sex" type="radio"
            /></label>

            <label class="w-[74px] flex items-center justify-between" for="sex"
              >Female <input id="female" name="sex" type="radio"
            /></label>
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="full name"
              name="full name"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="nick name"
              name="nick name"
              type="text"
              placeholder="Enter Your Nickname"
            />
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-4 flex rounded-l-md">
            <select
              class="h-10 rounded-l-md focus:outline-0"
              id="AreaPhoneNumber"
              name="AreaPhoneNumber"
            >
              <option value="+84">+84</option>
              <option value="+84">+852</option>
              <option value="+84">+853</option>
            </select>
            <el-input
              class="h-10"
              id="PhoneNumber"
              name="PhoneNumber"
              type="text"
              placeholder="Enter Your Phone Number"
            />
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
            />
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="password"
              name="password"
              type="password"
              placeholder="Set Your Password"
            />
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-8">
            <el-input
              class="h-10"
              id="password"
              name="password"
              type="password"
              placeholder="Confirm Your Password"
            />
          </fieldset>

          <fieldset class="drop-shadow-sm shadow-md mb-6">
            <button
              class="h-12 w-full flex justify-center items-center rounded-md bg-amber-500 text-2xl text-slate-50 hover:bg-amber-600 duration-500"
            >
              Sign Up
            </button>
          </fieldset>
          <fieldset class="text-xs text-gray-400 pb-16">
            <p class="text-center">
              Successful Sign Up means that you have read and agreed
            </p>
            <p class="text-center">
              《Company Group User Terms and Conditions》
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
  <section v-if="onLogin" class="login">
    <div
      class="my-8 mx-auto max-w-xl bg-gradient-to-r from-cyan-50 to-gray-50 drop-shadow-md shadow-2xl rounded-md"
    >
      <header class="text-3xl flex justify-end px-4 py-4">
        <button @click="closeModal()">
          <el-icon style="color: gray"><Close /></el-icon>
        </button>
      </header>
      <div class="max-w-sm mx-auto">
        <div class="mb-10">
          <ul
            class="w-52 mx-auto flex justify-between items-center text-2xl text-gray-400"
          >
            <li><button @click="changeSignup()">SIGN UP</button></li>
            <li class="h-6 w-[1.5px] bg-gray-300"></li>
            <li><button class="text-gray-950">LOGIN</button></li>
          </ul>
        </div>

        <form>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="idUser"
              name="idUser"
              type="text"
              placeholder="Enter Your UserID or Email"
              v-model="idUser"
            />
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-4">
            <el-input
              class="h-10"
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
            />
          </fieldset>

          <fieldset
            class="flex justify-end font-medium text-gray-400 hover:text-gray-950 duration-300 mb-8"
          >
            <button>Forgot password?</button>
          </fieldset>
          <fieldset class="drop-shadow-sm shadow-md mb-6">
            <button
              class="h-12 w-full flex justify-center items-center rounded-md bg-amber-500 text-2xl text-slate-50 hover:bg-amber-600 duration-500"
            >
              Login
            </button>
          </fieldset>
          <fieldset class="text-xs text-gray-400 pb-16">
            <p class="text-center">
              Successful Sign Up means that you have read and agreed
            </p>
            <p class="text-center">
              《Company Group User Terms and Conditions》
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();

    const onSignup = computed(function () {
      return store.getters.onSignup;
    });
    const onLogin = computed(function () {
      return store.getters.onLogin;
    });

    const closeModal = function () {
      return store.commit("closeModal");
    };

    function changeLogin() {
      store.commit("changeLogin", { value: "login" });
    }

    function changeSignup() {
      store.commit("changeSignup", { value: "signup" });
    }

    // const changeLogin = computed(function () {
    //   return store.getters.changeLogin;
    // });

    // const changeSignup = computed(function () {
    //   return store.getters.changeSignup;
    // });

    return {
      onSignup,
      onLogin,
      closeModal,
      changeLogin,
      changeSignup,
    };
  },
};
</script>

<style scoped>
.signup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 5rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}

.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 15rem;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
