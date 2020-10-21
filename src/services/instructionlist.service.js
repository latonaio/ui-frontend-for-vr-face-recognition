import { responseHandler } from "../helpers";

const apiURL = process.env.REACT_APP_APIURL;

export const instructionListService = {
  getHistory,
  registerImage
};

function getHistory() {
  return fetch(`${apiURL}instruction/get-history/`)
    .then(responseHandler)
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

function registerImage(workID, blob) {
  const formData = new FormData();
  formData.append("blob", blob);
  formData.append("workID", workID);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body:{}
  };

  return fetch(`${apiURL}file/upload/image`, formData, { requestOptions }).then(
    (data) => {
      return data.data;
    }
  );
}