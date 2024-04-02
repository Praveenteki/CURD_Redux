import { ActionTypes } from "./types";

type StateType = {
  auth: null | any;
  login_loading: boolean;
  loading_error: null | any;
};

const initialState: StateType = {
  auth: null,
  login_loading: false,
  loading_error: null,
};

type Action = {
  type: string;
  payload?: any;
};

export const reducer = (
  state: StateType = initialState,
  action: Action
): StateType => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        auth: action.payload,
        login_loading: false,
        loading_error: null,
      };
    case ActionTypes.LOGIN_LOADING:
      return {
        ...state,
        auth: null,
        login_loading: true,
        loading_error: null,
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        auth: null,
        login_loading: false,
        loading_error: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        auth: null,
        login_loading: false,
        loading_error: null,
      };

    default:
      return state;
  }
};
