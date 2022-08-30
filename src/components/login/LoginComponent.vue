<template>
  <div class="pc__flex--column">
    <div class="pc__card fit-content margin-3 align-center">
      <div class="pc__flex--column no-gap">
        <h3 class="align-center margin-2">Login</h3>
        <h4 class="pc__color--primary">Username</h4>
        <div class="pc__flex--row no-gap margin-2--bottom">
          <input type="text" class="pc__input padding-2" v-model="username" />
          <div class="padding-2 stretch pc__bg--neutral">
            <span class="material-icons-round align-center">person</span>
          </div>
        </div>
        <h4 class="pc__color--primary">Password</h4>
        <div class="pc__flex--row no-gap">
          <input
            type="password"
            class="pc__input padding-2"
            v-model="password"
          />
          <div class="padding-2 stretch pc__bg--neutral">
            <span class="material-icons-round align-center">key</span>
          </div>
        </div>
        <h4 class="pc__text--error margin-2--top">
          {{ name }}
        </h4>
        <button
          class="btn pc__btn-primary margin-2--top margin-2--bottom"
          @click="login"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import { useErrorStore } from "@/state/error";
import { config } from "@/utils/config";
import axios from "axios";
import { mapGetters, mapState } from "vuex";

const baseUrl = config.url;

export default {
  name: "LoginComponent",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios({
        method: "POST",
        url: `${baseUrl}user/authenticate`,
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((response) => {
        this.$store.dispatch("user/login", response.data.accessToken);
      });
    },
  },
  computed: {
    formatError() {
      return "";
    },
    ...mapGetters("user", {
      name: "userInfo",
    }),
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
