import * as types from '../actions/types.js';

var initialState = { open: false };

export default function modalReducer(state = initialState, action) {
  switch(action.type) {
  case types.OPEN_MODAL:
    return Object.assign({}, { open: true });
  case types.CLOSE_MODAL:
    return Object.assign({}, { open: false });
  default:
    return state;
  }
}
