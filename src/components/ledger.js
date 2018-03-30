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
            {this.props.data.map((item) => {
              return <tr key={item}>
                <td>{item.date}</td>
                <td colSpan="3">{item.description}</td>
                <td>{item.category}</td>
                <td>${item.amount}</td>
                <td>$-4.75</td>
              </tr>;
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}
