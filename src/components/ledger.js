import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';

export default class Ledger extends Component {
  render() {
    return(
      <Col sm={10} className="ledger">
        <Table responsive >
          <thead>
            <tr>
              <th>Date</th>
              <th colSpan="3">Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>03/10/18</td>
              <td colSpan="3">Boba at Roule</td>
              <td>Food</td>
              <td>$4.75</td>
              <td>$-4.75</td>
            </tr>
            <tr>
              <td>03/10/18</td>
              <td colSpan="3">Boba at Roule</td>
              <td>Food</td>
              <td>$4.75</td>
              <td>$-4.75</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    );
  }
}
