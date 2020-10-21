// TODO changing_slipと統合

import {changingHistoryConstants} from '../constants';
import {DUMMY_CHANGING_HISTORY} from "../dummy/changing_history.dummy";

const initialState = {
  changingHistory: DUMMY_CHANGING_HISTORY,
  selectedHistory: null,
  isCompleted: false,
};


export function changing_history(state = initialState, action) {
  if (action.type === changingHistoryConstants.FETCH_CHANGING_HISTORY_REQUEST) {
    return state;
  } else if (action.type === changingHistoryConstants.FETCH_CHANGING_HISTORY_SUCCESS) {
    return {
      ...state,
      isCompleted: true,
    };
  } else if (action.type === changingHistoryConstants.FETCH_CHANGING_HISTORY_FAILURE) {
    return state;
  } else if (action.type === changingHistoryConstants.SET_SELECTED_HISTORY) {
    return {
      ...state,
      selectedHistory: action.selectedHistory,
    }
  } else if (action.type === changingHistoryConstants.INIT_STATE) {
    return {
      ...initialState,
    }
  } else {
    return state;
  }
}
