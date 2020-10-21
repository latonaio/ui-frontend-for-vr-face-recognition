import {authHeader, responseHandler} from '../helpers';

const apiHost = process.env.REACT_APP_APIURL;

export const userService = {
  login,
  logout,
  getMe
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      {
        name: username,
        password
      }
    )
  };

  return fetch(`${apiHost}/authenticate`, requestOptions)
    .then(responseHandler)
    .then(data => {
      // login successful if there's a jwt token in the response
      if (data.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', JSON.stringify(data.token));
      }

      return data;
    });
}

function logout() {
  // ログアウト時にはローカルストレージからuserアイテムを削除する
  localStorage.removeItem('token');
}

function getMe() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${apiHost}/me`, requestOptions).then(responseHandler);
}
