import { combineReducers } from 'redux';

import accounts from './accounts.js';
import modal from './modal.js';

const reducers = combineReducers({
  accounts,
  modal
});

export default reducers;
