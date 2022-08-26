import { defineStore } from "pinia";

const ErrorTypes = {
  Warning: "Warning",
  Error: "Error",
};

export const useErrorStore = defineStore("error", {
  state: () => ({
    errors: [],
  }),
  actions: {
    clear() {
      this.errors = [];
    },
    add(statusCode, message) {
      let typeError;
      if (statusCode == 500) {
        typeError = ErrorTypes.Error;
      } else {
        typeError = ErrorTypes.Warning;
      }
      this.errors.push({
        code: statusCode,
        msg: message,
        type: typeError,
      });
      console.log("error: ", this.errors);
    },
    format() {
      return this.errors
        .map((value) => value.code + " - " + value.msg)
        .join("\n");
    },
  },
});
