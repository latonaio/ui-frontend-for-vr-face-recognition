import { authConstants } from '../constants';
import { userService } from '../services/user.service';
import { push } from 'react-router-redux';

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginRequest({ username }));

        userService.login(username, password)
          .then(
              data => {
                  dispatch(loginSuccess(data));
                  dispatch(push('/Main'));
              },
              error => {
                  dispatch(loginFailure(error));
              }
          );
    };

}

export const logoutAndRedirect = () => {
  return dispatch => {
    userService.logout();
    dispatch(logout());
    dispatch(push('/'));
  }
}

const logout = () => ({
  type: authConstants.LOGOUT
});


const loginRequest = data => ({
  type: authConstants.LOGIN_REQUEST,
});


const loginSuccess = data => ({
  type: authConstants.LOGIN_SUCCESS,
  payload: data
});
const loginFailure = error => ({
  type: authConstants.LOGIN_FAILURE,
  payload: error
});
