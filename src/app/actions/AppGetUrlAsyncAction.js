export const APP_GET_URL_ASYNC_REQUEST = "APP_GET_URL_ASYNC_REQUEST";
export const APP_GET_URL_ASYNC_SUCCESS = "APP_GET_URL_ASYNC_SUCCESS";
export const APP_GET_URL_ASYNC_FAIL = "APP_GET_URL_ASYNC_FAIL";

export const getTopGameList = () => {
  return {
    type: APP_GET_URL_ASYNC_REQUEST,
  };
};
export const getTopGameSuccess = (topGameList) => {
  return {
    type: APP_GET_URL_ASYNC_SUCCESS,
    payload: topGameList,
  };
};
export const getTopGameListFail = (errorMessage) => {
  return {
    type: APP_GET_URL_ASYNC_FAIL,
    payload: errorMessage,
  };
};
