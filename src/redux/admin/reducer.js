import {
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
} from "./ActionTypes";

const init = { loading: false, error: false, jobs: [] };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOB_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, payload],
        loading: false,
      };
    case ADD_JOB_ERROR:
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
