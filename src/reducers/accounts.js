import * as types from '../actions/types.js';

var initialState = [];

export default function accountsReducer(state = initialState, action) {
  switch(action.type) {
  case types.ADD_ACCOUNT:
    var newState = [...state];

    // Set current accounts to inactive
    newState.forEach(function(acc) {
      acc.active = false;
    });
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


  case types.SET_VISIBLE_ACCOUNT:
    var newState = [...state];
    var account = newState.find(function(acc) {
      return acc.name === action.account;
    });
    newState.forEach(function(acc) {
      acc.active = false;
    });
    var index = state.indexOf(account);
    account.active = true;
    newState[index] = account;
    return newState;

  default:
    return state;
  }
}
