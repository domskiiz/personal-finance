import * as types from '../actions/types.js';

var initialState = { transactions: [] };

export default function transactionReducer(state = initialState, action) {
  switch(action.type) {
  case types.ADD_TRANSACTION:
    var newState = [...state.transactions];
    var newTransaction = action.entry;
    newState.push(newTransaction);
    return Object.assign({}, { transactions: newState });
  default:
    return state;
  }
}
