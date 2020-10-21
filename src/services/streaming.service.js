import { responseHandler } from "../helpers";

const apiURL = process.env.REACT_APP_APIURL;

export const streamingService = {
  getImgUrl,
};

function getImgUrl() {
  return fetch(`${apiURL}streaming/get-img-url/`)
    .then(responseHandler)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}


