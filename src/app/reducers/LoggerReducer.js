import {
  LOGGER_REQUEST,
  LOGGER_SUCCESS,
  LOGGER_FAIL,
  LOGGER_RESET,
  LOGGER_RESPONSE,
  LOGGER_CATCHERROR,
} from "../actions/LoggerAction";

const initialState = {
  loggerID: 0,
  log: [],
  errorMessage: null,
};

const loggerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGER_SUCCESS:
      return {
        ...state,
        loggerID: action.payload.loggerID,
        log: [...state.log, action.payload.log],
        errorMessage: null,
      };
    case LOGGER_RESET:
      return {
        loggerID: 0,
        log: [],
        errorMessage: null,
      };
    case LOGGER_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case LOGGER_RESPONSE:
    case LOGGER_CATCHERROR:
    case LOGGER_REQUEST:
    default:
      return { ...state };
  }
};

export default loggerReducer;
