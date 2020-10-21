import {instructionListConstants} from '../constants';

const initialState = {
  image_list: [],
  error: null,
};

export function instructionList(state = initialState, action) {
  if (action.type === instructionListConstants.GET_HISTORY_REQUEST) {
    return {
      ...state,
    };
  } else if (action.type === instructionListConstants.GET_HISTORY_SUCCESS) {
    return {
      ...state,
      image_list: action.payload.image_list,
    };
  } else if (action.type === instructionListConstants.GET_HISTORY_FAILURE) {
    return {
      ...state,
      error: action.error,
    };
  } else {
    return state;
  }
}
