import {
  APPLY_JOB_LOADING,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
} from "./actionTypes";

const init = { loading: false, error: false, jobs: [] };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case APPLY_JOB_LOADING:
      return {
        ...state,
        loading: true,
      };
    case APPLY_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, payload],
      };
    case APPLY_JOB_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_JOB_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_JOB_SUCCESS:
      return {
        ...state,
        jobs: payload,
        loading: false,
      };
    case GET_JOB_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
