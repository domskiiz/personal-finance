import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTransaction, closeModal } from '../actions/index.js';

class TransactionModal extends Component {
  constructor(props) {
    super(props);
    this.addTransaction = this.addTransaction.bind(this);
  }

  addTransaction() {
    this.props.addTransaction("hi");
  }

  render() {
    return(
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
    );
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.modal.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    closeModal: () => dispatch(closeModal())
  };
};

export default TransactionModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionModal);
