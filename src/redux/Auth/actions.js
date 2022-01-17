import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

export const LoginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const LoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const LoginFailure = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
