import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import transactionReducer from './reducers/transactions.js';

import App from './containers/App.js';

let store = compose(applyMiddleware(logger))(createStore)(transactionReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
