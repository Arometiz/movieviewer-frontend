import {
  LOGIN_PENDING,
  LOGIN_SUCCES,
  LOGIN_ERROR,
} from "../actions/loginAction";

const initialState = {
  pending: false,
  loggedIn: false,
  error: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCES:
      return {
        ...state,
        pending: false,
        loggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getLoggedIn = state => state.loginReducer.loggedIn;
export const getLoginPending = state => state.loginReducer.pending;
export const getLoginError = state => state.loginReducer.error;
