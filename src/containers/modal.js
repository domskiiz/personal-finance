import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTransaction, closeModal } from '../actions/index.js';

class TransactionModal extends Component {
  constructor(props) {
    super(props);

    this.addTransaction = this.addTransaction.bind(this);

    this.state = {
      amount: 0,
      description: "",
      category: "",
      date: ""
    };
  }

  addTransaction() {
    this.props.addTransaction({
      amount: this.state.amount,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date
    });
    this.props.closeModal();
  }

  handleAmtChange(e) {
    this.setState({ amount: e.target.value });
  }

  handleDescChange(e) {
    this.setState({ description: e.target.value });
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }


  render() {
    return(
      <Modal show={this.props.modalState} onHide={() => this.props.closeModal()}>
        <Modal.Header>
          <Modal.Title>New Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Amount</ControlLabel>
              <FormControl
                type="number"
                placeholder="Enter amount"
                onChange={(e) => this.handleAmtChange(e)}
              />
              <FormControl
                type="text"
                placeholder="Description"
                onChange={(e) => this.handleDescChange(e)}
              />
              <FormControl
                type="text"
                placeholder="Category"
                onChange={(e) => this.handleCategoryChange(e)}
              />
              <InputGroup>
                <FormControl
                  type="date"
                  onChange={(e) => this.handleDateChange(e)}
                />
                <InputGroup.Addon>
                  <Glyphicon glyph="calendar" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </form>
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
