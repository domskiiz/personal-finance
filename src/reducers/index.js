import { combineReducers } from 'redux';

import transactionData from './transactions.js';
import modal from './modal.js';

const reducers = combineReducers({
  transactionData,
  modal
});

export default reducers;
