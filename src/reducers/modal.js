import * as types from '../actions/types.js';

var initialState = { open: false, accModalOpen: false };

export default function modalReducer(state = initialState, action) {
  switch(action.type) {
  case types.OPEN_MODAL:
    return Object.assign({}, { open: true });
  case types.CLOSE_MODAL:
    return Object.assign({}, { open: false });
  case types.OPEN_ACCOUNT_MODAL:
    return Object.assign({}, { accModalOpen: true });
  case types.CLOSE_ACCOUNT_MODAL:
    return Object.assign({}, { accModalOpen: false });
  default:
    return state;
  }
}
