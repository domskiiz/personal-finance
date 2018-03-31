import React, { Component } from 'react';
import { Col, Nav, NavItem, Button, SplitButton, MenuItem } from 'react-bootstrap';

import { connect } from 'react-redux';
import { openModal, openAccModal, setVisibility } from '../actions/index.js';

import TransactionModal from './modal.js';
import AccountModal from './accountModal.js';

class Sidebar extends Component {
  render() {
    return(
      <Col sm={2} className="sidebar">
        <Nav stacked>
          <NavItem>
            <SplitButton
              title="Accounts"
              id={"split-button-basic-1"}
            >
              {this.props.accounts.map((account, i) => {
                return <MenuItem
                  key={i}
                  onClick={() => this.props.setVisibility(account.name)}
                >
                  {account.name}
                </MenuItem>;
              })}
              <MenuItem divider />
              <MenuItem onClick={() => this.props.openAccModal()} >
                Add Account
              </MenuItem>
            </SplitButton>
          </NavItem>
          <NavItem>
            <SplitButton
              title="Budgets"
              id={"split-button-basic-1"}
            >
            </SplitButton>
          </NavItem>
        </Nav>
        <Button className="button-add" bsStyle="info" onClick={() => this.props.openModal()}>Add Transaction</Button>
        <TransactionModal />
        <AccountModal />
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    openAccModal: () => dispatch(openAccModal()),
    setVisibility: (account) => dispatch(setVisibility(account))
  };
};

export default Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
