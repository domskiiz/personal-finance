import React, { Component } from 'react';
import { Col, Nav, NavItem, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { closeModal, openModal } from '../actions/index.js';

import TransactionModal from './modal.js';

class Sidebar extends Component {
  render() {
    return(
      <Col sm={2} className="sidebar">
        <Nav stacked>
          <NavItem>Accounts</NavItem>
          <NavItem>Budgets</NavItem>
        </Nav>
        <Button className="button-add" bsStyle="info" onClick={() => this.props.openModal()}>Add Transaction</Button>
        <TransactionModal />
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal())
  };
};

export default Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
