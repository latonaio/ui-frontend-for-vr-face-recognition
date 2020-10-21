import {mainConstants} from "../constants";
import {mainService} from "../services/main.service";

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataRequest());

    mainService.fetchData()
      .then(
        data => {
          dispatch(fetchDataSuccess(data));
        },
        error => {
          dispatch(fetchDataFailure(error));
        }
      );
  }
};


const fetchDataRequest = () => ({
  type: mainConstants.FETCH_DATA_REQUEST,
});
const fetchDataSuccess = data => ({
  type: mainConstants.FETCH_DATA_SUCCESS,
  payload: data,
});
const fetchDataFailure = error => ({
  type: mainConstants.FETCH_DATA_FAILURE,
  error: error,
});