import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogged: false,
    accessToken: "",
    refreshToken: "",
  }),
  actions: {
    toggleAuthentication() {
      this.isLogged = !this.isLogged;
    },
    logout() {
      this.isLogged = false;
      this.accessToken = "";
      this.refreshToken = "";
    },
    register(at, rt) {
      this.accessToken = at;
      this.refreshToken = rt;
    },
  },
});
