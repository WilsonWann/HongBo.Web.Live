import {
  LOGGER_REQUEST,
  LOGGER_SUCCESS,
  LOGGER_FAIL,
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
    case LOGGER_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case LOGGER_REQUEST:
    default:
      return { ...state };
  }
};

export default loggerReducer;
