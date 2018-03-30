import * as types from '../actions/types.js';

var initialState = [];

export default function accountsReducer(state = initialState, action) {
  switch(action.type) {
  case types.ADD_ACCOUNT:
    var newState = [...state];
    var newAccount = Object.assign({}, action.account, { transactions: [] }, { active: true });
    newState.push(newAccount);
    return newState;

  case types.ADD_TRANSACTION:
    // Return active account and its array of transactions
    var account = state.find(function(acc) {
      return acc.active === true;
    });
    var transactionArray = [...account.transactions];
    // Add new transaction to the front of array
    var newTransaction = action.entry;
    transactionArray.unshift(newTransaction);
    // Update account with new transaction array
    var updatedAccount = Object.assign({}, account, { transactions: transactionArray });
    var index = state.indexOf(account);
    var newState = [...state];
    newState[index] = updatedAccount;
    return newState;

  default:
    return state;
  }
}
