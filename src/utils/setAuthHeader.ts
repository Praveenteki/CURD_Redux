import axios from "axios";

export const setAuthHeader = (token?: string) => {
  if (token) {
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  } else {
    axios.defaults.headers.common = { Authorization: "" };
  }
};
