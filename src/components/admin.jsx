import React, { Component } from "react";
import AdminLayout from "./common/adminAccounts";
import Goals from "./common/adminGoals";

class Admin extends Component {
  state = {};
  render() {
    const goals = this.props.goals.filter(
      goal => goal.childCompleted === true && goal.completed !== true
    );
    const paidGoals = this.props.goals.map(goal => goal.paid);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="jumbotron">
              <h1>Admin</h1>
              <h4>track childs goals and pay them at the end of the week</h4>
            </div>
          </div>
        </div>
        <div className="row m-4">
          <Goals
            handlePaymentChange={this.props.handlePaymentChange}
            handleAdminSubmit={this.props.handleAdminSubmit}
            handleAdminPayment={this.props.handleAdminPayment}
            goals={goals}
            paidGoals={paidGoals}
          />
          <AdminLayout
            accounts={this.props.accounts}
            newAccount={this.props.newAccount}
            handleAddAccount={this.props.handleAddAccount}
            handleAccountChange={this.props.handleAccountChange}
            handleAccountEdit={this.props.handleAccountEdit}
            handleDeleteAccount={this.props.handleDeleteAccount}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
