import React, { Component } from 'react';
import { Col, Nav, NavItem, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { openModal, openAccModal, setVisibility } from '../actions/index.js';

import TransactionModal from './modal.js';
import AccountModal from './accountModal.js';

class Sidebar extends Component {
  render() {
    return(
      <Col sm={3} className="sidebar">
        <Nav stacked >
          <div className="sidebar-section">
            <div className="sidebar-navheader">
              ACCOUNTS
            </div>
            {this.props.accounts.map((account, i) => {
              return <NavItem className="sidebar-navitem"
                key={i}
                onClick={() => this.props.setVisibility(account.name)}
              >
                {account.name}
                &emsp; &emsp;
                <span className="balance-indicator">
                  {account.balance < 0 ? "-$" + Math.abs(account.balance) : "$" + account.balance}
                </span>
              </NavItem>;
            })}
            <NavItem className="add-button" onClick={() => this.props.openAccModal()}>
              + Add Account
            </NavItem>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-navheader">
              BUDGETS
            </div>
          </div>
        </Nav>
        <Button
          className="button-add"
          onClick={() => this.props.openModal()}
        >
          + Add Transaction
        </Button>
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
