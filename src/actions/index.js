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
