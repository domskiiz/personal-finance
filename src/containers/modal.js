import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl, InputGroup, Radio } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTransaction, closeModal } from '../actions/index.js';
import { getFormattedDate } from '../utilities.js';

class TransactionModal extends Component {
  constructor(props) {
    super(props);

    this.addTransaction = this.addTransaction.bind(this);

    this.state = {
      amount: 0,
      description: "",
      category: "",
      date: null,
      positive: false
    };
  }

  addTransaction() {
    var amount = Math.abs(this.state.amount);
    if (!this.state.positive) {
      amount *= -1;
    }
    this.props.addTransaction({
      amount: amount,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date || getFormattedDate()
    });
    this.props.closeModal();
    this.setState({
      amount: 0,
      description: "",
      category: "",
      date: null,
      positive: false
    });
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

  handlePlus(e) {
    this.setState({ positive: true });
  }

  handleMinus(e) {
    this.setState({ positive: false });
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
              <FormControl
                type="number"
                placeholder="Amount"
                onChange={(e) => this.handleAmtChange(e)}
              />
              <FormGroup>
                <Radio onClick={(e) => this.handlePlus(e)} name="radioGroup" inline>
                  +
                </Radio>{' '}
                <Radio onClick={(e) => this.handleMinus(e)} name="radioGroup" inline>
                  -
                </Radio>{' '}
              </FormGroup>
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
              </InputGroup>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-add" onClick={this.addTransaction}>Add Transaction</Button>
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
