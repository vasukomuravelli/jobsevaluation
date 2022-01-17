import {
  APPLY_JOB_LOADING,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
} from "./actionTypes";

export const applyJobLoading = () => {
  return { type: APPLY_JOB_LOADING };
};

export const applyJobSuccess = (data) => {
  return {
    type: APPLY_JOB_SUCCESS,
    payload: data,
  };
};

export const applyJobError = (err) => {
  return {
    type: APPLY_JOB_ERROR,
    payload: err,
  };
};

export const getJobLoading = () => {
  return { type: GET_JOB_LOADING };
};

export const getJobSuccess = (data) => {
  return {
    type: GET_JOB_SUCCESS,
    payload: data,
  };
};

export const getJobError = (err) => {
  return {
    type: GET_JOB_ERROR,
    payload: err,
  };
};
