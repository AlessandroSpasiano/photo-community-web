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
        <h4 class="pc__text--error margin-2--top" v-if="formatError.length > 0">
          {{ formatError }}
        </h4>
        <h4 class="pc__text--error margin-2--top" v-else>
          {{ user }}
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
import { useErrorStore } from "@/state/error";
import { useUserStore } from "@/state/user";
import { config } from "@/utils/config";
import axios from "axios";

const baseUrl = config.url;

export default {
  name: "LoginComponent",
  props: {},
  data() {
    const error = useErrorStore();
    const userState = useUserStore();
    return {
      username: "",
      password: "",
      error,
      userState,
    };
  },
  methods: {
    login() {
      this.error.clear();
      if (this.username.length === 0) {
        this.error.add(404, "Username required");
        return;
      }
      if (this.password.length === 0) {
        this.error.add(404, "Password required");
        return;
      }
      axios({
        method: "POST",
        url: `${baseUrl}user/authenticate`,
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((response) => {
        this.userState.register(response.data.accessToken, null);
      });
    },
  },
  computed: {
    formatError() {
      return this.error.format();
    },
    user() {
      return this.userState.accessToken;
    },
  },
};
</script>
