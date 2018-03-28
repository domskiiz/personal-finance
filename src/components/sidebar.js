import React, { Component } from 'react';
import { Col, Nav, NavItem } from 'react-bootstrap';

export default class Sidebar extends Component {
  render() {
    return(
      <Col sm={2} className="sidebar">
        <Nav stacked activeKey={1}>
          <NavItem eventKey={1}>Accounts</NavItem>
          <NavItem eventKey={2}>Budgets</NavItem>
        </Nav>
      </Col>
    );
  }
}
