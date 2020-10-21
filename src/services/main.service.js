import {responseHandler} from "../helpers";

const apiURL = process.env.REACT_APP_APIURL;

export const mainService = {
  fetchData,
};

function fetchData() {
  return fetch(`${apiURL}main/fetch/data/`)
    .then(responseHandler)
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}
