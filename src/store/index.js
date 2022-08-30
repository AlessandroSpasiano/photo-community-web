import { createStore } from "vuex";
import { user } from "@/store/modules/user";

export const store = createStore({
  modules: {
    user,
  },
  strict: true,
});
