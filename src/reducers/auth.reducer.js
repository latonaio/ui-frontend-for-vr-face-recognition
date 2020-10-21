import { authConstants } from '../constants';

let token = JSON.parse(localStorage.getItem('token'));
const initialState = token ?
{
  loggingIn: false,
  loggedIn: true,
  token: token,
  error: false,
}
: {
  loggingIn: false,
  loggedIn: false,
  token: null,
  error: false,
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        error: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.payload.token,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        error: false
      };
    default:
      return state
  }
}
