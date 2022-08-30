import axios from "axios";

export function jwtInterceptor() {
  axios.interceptors.request.use((request) => {
    //const account = useUserStore();
    //const isLoggedIn = false;
    // if (isLoggedIn) {
    //   request.headers["Authorization"] = `Bearer ${account.token}`;
    // }
    request.headers["Content-Type"] = "application/json";
    request.headers["Access-Control-Allow-Origin"] = "*";

    return request;
  });
}
