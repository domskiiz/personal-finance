import * as types from './types.js';

export function addTransaction(entry) {
  return {
    type: types.ADD_TRANSACTION,
    entry
  };
}

export function openModal() {
  return {
    type: types.OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL,
  };
}

export function openAccModal() {
  return {
    type: types.OPEN_ACCOUNT_MODAL,
  };
}

export function closeAccModal() {
  return {
    type: types.CLOSE_ACCOUNT_MODAL,
  };
}

export function addAccount(account) {
  return {
    type: types.ADD_ACCOUNT,
    account
  };
}
