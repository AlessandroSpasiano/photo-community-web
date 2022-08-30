import { jwtHelper } from "@/utils/helpers/jwtHelper";
import moment from "moment";

const state = () => ({
  name: "",
  surname: "",
  age: 0,
});

const getters = {
  userInfo: (state) => {
    return state.name + " " + state.surname;
  },
};

const mutations = {
  registerUser(state, token) {
    const decode = jwtHelper.decodeToken(token);
    state.name = decode.name;
    state.surname = decode.surname;
    state.age = moment(decode.birthday, "YYYY-MM-DD").fromNow();
  },
};

const actions = {
  login({ commit }, token) {
    commit("registerUser", token);
  },
};

export const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
