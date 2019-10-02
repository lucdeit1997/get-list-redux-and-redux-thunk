import {
  FETCH_START,
  LIST_SUCCESS,
  LIST_ERROR
} from "./typeActions";
import axios from "axios";

const getListSuccess = data => {
  return {
    type: LIST_SUCCESS,
    payload: { data }
  };
};

const getListError = error => {
  return {
    type: LIST_ERROR,
    payload: { error }
  };
};

export const getListAction = () => {
  return async dispatch => {
    try {
      dispatch({ type: FETCH_START });
      let { data } = await axios.get("http://localhost:3000/posts");
      if (data) {
        dispatch(getListSuccess(data));
      } else {
        dispatch(getListError("khong get list dc"));
      }
    } catch (error) {
      dispatch(getListError(error.message));
    }
  };
};
