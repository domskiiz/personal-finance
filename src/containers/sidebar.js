import React, { Component } from 'react';
import { Col, Nav, NavItem, Button, Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTransaction, closeModal, openModal } from '../actions/index.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.addTransaction = this.addTransaction.bind(this);
  }

  addTransaction() {
    this.props.addTransaction("hi");
  }

  render() {
    return(
      <Col sm={2} className="sidebar">
        <Nav stacked>
          <NavItem>Accounts</NavItem>
          <NavItem>Budgets</NavItem>
        </Nav>
        <Button className="button-add" bsStyle="info" onClick={() => this.props.openModal()}>Add Transaction</Button>
        <Modal show={this.props.modalState} onHide={() => this.props.closeModal()}>
          <Modal.Header>
            <Modal.Title>New Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={this.addTransaction}>Add Transaction</Button>
            <Button onClick={() => this.props.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactionData,
    modalState: state.modal.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
  };
};

export default Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
