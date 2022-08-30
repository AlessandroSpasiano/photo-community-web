<template>
  <div class="pc__grid-3 padding-2 pc__bg--primary-variant">
    <div class="pc__grid--logo">
      <router-link to="/">
        <img
          class="pc__logo"
          src="@/assets/image-resources/unnamed.jpg"
          alt="Logo"
        />
      </router-link>
    </div>
    <div class="pc__grid--title">
      <div class="pc__color--secondary pc__text--h3">{{ title }}</div>
    </div>
    <div class="pc__grid--actions">
      <button class="pc__btn-outline-primary btn borderless" @click="login">
        <span class="material-icons-round" v-if="isLogged">logout</span>
        <span class="material-icons-round" v-else>login</span>
      </button>
    </div>
  </div>
  <router-view />
</template>
<style>
@import "./assets/css/app.css";
</style>
<script>
import { config } from "@/utils/config";

export default {
  data() {
    return {
      config,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
  computed: {
    title() {
      return this.config.appTitle;
    },
  },
};
</script>
