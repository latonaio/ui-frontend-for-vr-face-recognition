import {streamingConstants} from "../constants";
import {streamingService} from "../services/streaming.service";

export const getImgUrl = () => {
  return dispatch => {
    dispatch(getImgUrlRequest());

    streamingService.getImgUrl()
      .then(
        data => {
          dispatch(getImgUrlSuccess(data));
        },
        error => {
          dispatch(getImgUrlFailure(error));
        }
      );
  }
};


const getImgUrlRequest = () => ({
  type: streamingConstants.GET_IMAGE_URL_REQUEST,
});
const getImgUrlSuccess = data => ({
  type: streamingConstants.GET_IMAGE_URL_SUCCESS,
  payload: data,
});
const getImgUrlFailure = error => ({
  type: streamingConstants.GET_IMAGE_URL_FAILURE,
  error: error,
});
