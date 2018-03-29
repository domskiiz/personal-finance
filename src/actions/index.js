import * as types from './types.js';

export function addTransaction(entry) {
  return {
    type: types.ADD_TRANSACTION,
    entry
  };
}
