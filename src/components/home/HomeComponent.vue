<template>
  <div>
    <h3>Home view</h3>
  </div>
</template>

<script>
import { useUserStore } from "@/state/user";

export default {
  name: "HomeComponent",
  data() {
    const userStore = useUserStore();
    return {
      user: userStore,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
  computed: {
    isLogged() {
      return this.user.isLogged == true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
