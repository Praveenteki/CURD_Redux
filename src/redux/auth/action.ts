import { request } from "../../service";
import { apiUrls } from "../../utils/apiUrls";
import { setAuthHeader } from "../../utils/setAuthHeader";
import { AppDispatch } from "../store";
import { ActionTypes } from "./types";
import { sha256 } from "js-sha256";

export const loginUser =
  (username: string, password: string, successHandler: Function) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: ActionTypes.LOGIN_LOADING });
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", sha256(password));
      formData.append("grant_type", "password");
      const headers: any = {
        Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
      };
      const data = await request(apiUrls.login, "POST", formData, headers);
      if (data?.response?.access_token) {
        setAuthHeader(data?.response?.access_token);
        successHandler();
      }
      dispatch({ type: ActionTypes.LOGIN, payload: data });
    } catch (error) {
      dispatch({
        type: ActionTypes.LOGIN_ERROR,
        payload: JSON.stringify(error),
      });
    }
  };

export const logoutUser = () => async (dispatch: AppDispatch) => {
  setAuthHeader("");
  dispatch({ type: ActionTypes.LOGOUT });
};
