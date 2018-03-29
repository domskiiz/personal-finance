import React, { Component } from 'react';
import { Col, Nav, NavItem, Button, Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTransaction } from '../actions/index.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addTransaction = this.addTransaction.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
        <Button className="button-add" bsStyle="info" onClick={this.handleShow}>Add Transaction</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>New Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={this.addTransaction}>Add Transaction</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: (transaction) => dispatch(addTransaction(transaction))
  };
};

export default Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
