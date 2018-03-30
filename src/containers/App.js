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
  return {
    transactions: state.transactionData.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
