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
          <Ledger data={this.props.transactions} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  var transactionArray;
  if (state.accounts.length === 0)
    transactionArray = [];
  else {
    var account = state.accounts.find(function(acc) {
      return acc.active === true;
    });
    console.log(account.transactions);
    transactionArray = account.transactions;
    console.log(transactionArray);
  }
  return {
    transactions: transactionArray
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
