import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { errorInterceptor } from "./utils/helpers/errorInterceptor";
import { jwtInterceptor } from "./utils/helpers/jwtInterceptor";

jwtInterceptor();
errorInterceptor();

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
