import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

const init = { userState: "", loading: false, error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userState: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
