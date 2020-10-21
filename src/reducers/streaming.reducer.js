import {streamingConstants} from '../constants';

const initialState = {
  imgUrl: '',
  error: null,
};

export function streaming(state = initialState, action) {
  if (action.type === streamingConstants.GET_IMAGE_URL_REQUEST) {
    return {
      ...state,
    };
  } else if (action.type === streamingConstants.GET_IMAGE_URL_SUCCESS) {
    return {
      ...state,
      imgUrl: action.payload.url,
      remoteDate: action.payload.date,
    };
  } else if (action.type === streamingConstants.GET_IMAGE_URL_FAILURE) {
    return {
      ...state,
      error: action.error,
    };
  } else {
    return state;
  }
}
