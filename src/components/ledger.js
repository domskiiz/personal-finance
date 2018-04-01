import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';

export default class Ledger extends Component {
  render() {
    return(
      <Col sm={9} className="ledger">
        <div className="header">
          {this.props.account.name}
          &emsp;
          <span className="balance-indicator-lg">
            {this.props.account.balance < 0
              ? "-$" + Math.abs(this.props.account.balance)
              : "$" + this.props.account.balance
            }
          </span>
        </div>
        <Table responsive >
          <thead>
            <tr class="table">
              <th>Date</th>
              <th colSpan="3">Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, i) => {
              return <tr className="table-entry" key={i}>
                <td>{item.date}</td>
                <td colSpan="3">{item.description}</td>
                <td>{item.category}</td>
                <td>${item.amount}</td>
                <td>${item.runningBalance}</td>
              </tr>;
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}
