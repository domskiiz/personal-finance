import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';

// Components
import Sidebar from './sidebar.js';
import Ledger from '../components/ledger.js';

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Sidebar />
          <Ledger header={this.props.active} data={this.props.transactions} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  var transactionArray;
  var active;
  if (state.accounts.length === 0) {
    transactionArray = [];
    active = null;
  }
  else {
    var account = state.accounts.find(function(acc) {
      return acc.active === true;
    });
    transactionArray = account.transactions;
    active = account.name;
  }
  return {
    transactions: transactionArray,
    active: active
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
