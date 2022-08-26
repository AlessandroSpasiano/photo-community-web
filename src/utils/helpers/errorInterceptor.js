import { useUserStore } from "@/state/user";
import { useErrorStore } from "@/state/error";
import axios from "axios";

export function errorInterceptor() {
  axios.interceptors.response.use(null, (error) => {
    const { response } = error;
    const account = useUserStore();
    const errorStore = useErrorStore();
    if (!response) {
      console.error(error);
      return;
    }

    if ([401, 403].includes(response.status)) {
      account.logout();
    }

    console.error("error: ", response.data?.message);
    errorStore.add(
      response.status,
      response.data?.message || response.statusText
    );
  });
}
