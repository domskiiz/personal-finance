import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Sidebar from '../components/sidebar.js';
import Ledger from './ledger.js';

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
