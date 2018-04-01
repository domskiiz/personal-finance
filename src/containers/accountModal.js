import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addAccount, closeAccModal } from '../actions/index.js';

class AccountModal extends Component {
  constructor(props) {
    super(props);
    this.addAccount = this.addAccount.bind(this);

    this.state = {
      name: "",
      balance: 0,
      credit: false,
    };
  }

  addAccount() {
    var balance;
    if (this.state.credit) {
      balance = Math.abs(Number(this.state.balance)) * -1;
    } else {
      balance = Math.abs(Number(this.state.balance));
    }
    this.props.addAccount({
      name: this.state.name,
      balance: balance,
      credit: this.state.credit,
    });
    console.log(this.state);
    this.props.closeModal();
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleBalanceChange(e) {
    this.setState({ balance: e.target.value });
  }

  handleChange(e) {
    this.setState({ credit: e.target.checked });
  }

  render() {
    return(
      <Modal show={this.props.modalState} onHide={() => this.props.closeModal()}>
        <Modal.Header>
          <Modal.Title>New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Name"
                onChange={(e) => this.handleNameChange(e)}
              />
              <FormControl
                type="number"
                placeholder="Balance"
                onChange={(e) => this.handleBalanceChange(e)}
              />
              <Checkbox
                checked={this.state.credit}
                onChange={(e) => this.handleChange(e)}
              >
                Credit Account
              </Checkbox>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="info" onClick={this.addAccount}>Add Account</Button>
          <Button onClick={() => this.props.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.modal.accModalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAccount: (account) => dispatch(addAccount(account)),
    closeModal: () => dispatch(closeAccModal())
  };
};

export default AccountModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountModal);
