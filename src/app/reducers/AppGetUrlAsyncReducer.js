import {
  APP_GET_URL_ASYNC_SUCCESS,
  APP_GET_URL_ASYNC_FAIL,
  APP_GET_URL_ASYNC_REQUEST,
} from "../actions/AppGetUrlAsyncAction";

const initialState = {
  data: null,
  errorMessage: null,
};

const appGetUrlAsyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_GET_URL_ASYNC_SUCCESS:
      return { ...state, data: action.payload, errorMessage: null };
    case APP_GET_URL_ASYNC_FAIL:
      return { ...state, errorMessage: action.payload };
    case APP_GET_URL_ASYNC_REQUEST:
    default:
      return { ...state };
  }
};

export default appGetUrlAsyncReducer;
