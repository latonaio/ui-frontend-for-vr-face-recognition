import { instructionListConstants } from "../constants";
import {
  instructionListService,
} from "../services/instructionlist.service";

export const getHistory = () => {
  return (dispatch) => {
    dispatch(getHistoryRequest());

    instructionListService.getHistory().then(
      (data) => {
        dispatch(getHistorySuccess(data));
      },
      (error) => {
        dispatch(getHistoryFailure(error));
      }
    );
  };
};

const getHistoryRequest = () => ({
  type: instructionListConstants.GET_HISTORY_REQUEST,
});
const getHistorySuccess = (data) => ({
  type: instructionListConstants.GET_HISTORY_SUCCESS,
  payload: data,
});
const getHistoryFailure = (error) => ({
  type: instructionListConstants.GET_HISTORY_FAILURE,
  error: error,
});

export const registerImage = () => {
  return (dispatch) => {
    instructionListService.registerImage();
  };
};
