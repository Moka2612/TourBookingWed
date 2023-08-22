import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      signUp: false,
      login: false,
    };
  },
  mutations: {
    setSignup(state, payload) {
      state.signUp = payload.signupOn;
    },
    setLogin(state, payload) {
      state.login = payload.loginOn;
    },
    closeModal(state) {
      state.signUp = false;
      state.login = false;
    },
    changeLogin(state, payload) {
      if ((payload.value = "login")) {
        return (state.login = true) && (state.signUp = false);
      }
    },
    changeSignup(state, payload) {
      if ((payload.value = "signup")) {
        return (state.signUp = true) && (state.login = false);
      }
    },
  },
  actions: {
    signup(context) {
      context.commit("setSignup", { signupOn: true });
    },
    login(context) {
      context.commit("setLogin", { loginOn: true });
    },
  },
  getters: {
    onSignup(state) {
      return state.signUp;
    },
    onLogin(state) {
      return state.login;
    },
  },
});

export default store;
