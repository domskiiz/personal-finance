import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

// Reducers and actions
// import { addTransaction } from '../actions/index.js';
// import transactionReducer from '../reducers/index.js';

// Components
import Sidebar from './sidebar.js';
import Ledger from '../components/ledger.js';

export default class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Sidebar />
          <Ledger />
        </Row>
      </Grid>
    );
  }
}
