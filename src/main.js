import { createApp } from "vue";
import { store } from "@/store/";
import App from "./App.vue";
import router from "./router";
import { errorInterceptor } from "./utils/helpers/errorInterceptor";
import { jwtInterceptor } from "./utils/helpers/jwtInterceptor";

jwtInterceptor();
errorInterceptor();

createApp(App).use(router).use(store).mount("#app");
