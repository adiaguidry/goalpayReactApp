import React, { Component } from "react";
import Admin from "./components/admin";
import "./App.css";
import Accounts from "./components/accounts";
import Goals from "./components/goals";
import NavBar from "./components/navBar";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";


class App extends Component {
  state = {
    newGoal: {
      _id: " ",
      task: " ",
      note: ""
    },
    newAccount: {
      _id: "",
      accountName: "",
      goalAmount: "",
      currentAmount: ""
    },
    accounts: [
      {
        _id: 1234,
        accountName: "Disneyland",
        goalAmount: "160",
        currentAmount: "0"
      },
      {
        _id: 4567,
        accountName: "Ice Cream",
        goalAmount: "10",
        currentAmount: "2"
      },
      {
        _id: 8790,
        accountName: "Movies",
        goalAmount: "16",
        currentAmount: "4"
      },
      {
        _id: 7890,
        accountName: "Movies",
        goalAmount: "16",
        currentAmount: "4"
      }
    ],
    goals: [
      {
        _id: 1234,
        task: "Empty dishwasher and load with dirty dishes",
        note: "Try again, dishwasher is not empty",
        noteStatus: false,
        fixed: false,
        childCompleted: true,
        completed: false,
        paid: "0",
        paymentAllocated: false
      },
      {
        _id: 2345,
        task: "Have my planner signed everyday this week",
        note: "",
        noteStatus: false,
        fixed: false,
        childCompleted: false,
        completed: false,
        paid: "0",
        paymentAllocated: false
      },
      {
        _id: 3456,
        task: "Clean bathroom when its my turn without being told",
        note: "",
        noteStatus: false,
        fixed: false,
        childCompleted: false,
        completed: false,
        paid: "0",
        paymentAllocated: false
      },
      {
        _id: 34567,
        task: "Clean bedroom without being told",
        note: "",
        noteStatus: false,
        fixed: false,
        childCompleted: false,
        completed: false,
        paid: "0",
        paymentAllocated: false
      }
    ],
    paidGoals: []
  };

  handleAdminSubmit = e => {
    e.preventDefault();
    this.paidOffGoals();
    this.handleStateChangePaid();
  };

  handlePaymentChange = ({ currentTarget: input }, goal) => {
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g === goal);
    goals[index][input.name] = input.value;
    this.setState({ goals });
  };

  handleAdminPayment = goal => {
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g === goal);
    goals[index].completed = true;
  };

  handleStateChangePaid = () => {
    const paid = true;
    this.setState({ paid });
  };

  handleAddAccount = e => {
    e.preventDefault();
    let newAccount = this.state.newAccount;
    console.log("submit newAccount._id: ", newAccount._id);
    newAccount._id
      ? this.handleFindandEditAccount()
      : this.handleCreateNewAccount();
    newAccount = {
      _id: "",
      accountName: "",
      goalAmount: "",
      currentAmount: ""
    };
    this.setState({ newAccount });
  };

  handleCreateNewAccount = () => {
    const newAccount = this.state.newAccount;
    newAccount._id = Date.now();
    const accounts = [this.state.newAccount, ...this.state.accounts];
    this.setState({ accounts, newAccount });
  };

  handleFindandEditAccount = () => {
    const newAccount = this.state.newAccount;
    const accounts = [...this.state.accounts];
    const index = accounts.findIndex(a => a._id === newAccount._id);

    //set account to newAccount properties
    accounts[index] = {
      _id: newAccount._id,
      accountName: newAccount.accountName,
      goalAmount: newAccount.goalAmount,
      currentAmount: newAccount.currentAmount
    };
    console.log(accounts, newAccount);
    this.setState({ accounts });
  };

  handleAccountChange = ({ currentTarget: input }) => {
    const newAccount = { ...this.state.newAccount };
    newAccount[input.name] = input.value;
    newAccount[input.name] = input.value;
    newAccount[input.name] = input.value;
    console.log("change newAccount._id: ", newAccount._id);
    this.setState({ newAccount });
  };

  handleAccountEdit = account => {
    const newAccount = {
      _id: account._id,
      accountName: account.accountName,
      goalAmount: account.goalAmount,
      currentAmount: account.currentAmount
    };
    console.log("edit newAccount._id: ", newAccount._id);
    this.setState({ newAccount });
  };
  handleAddMoneyToAccount = (a, i) => {
    const accounts = [...this.state.accounts];
    const index = accounts.findIndex(account => account._id === a._id);
    const currentAmount =
      Number(accounts[index].currentAmount) + Number(i.amount);
    accounts[index].currentAmount = currentAmount.toString();
    const goals = [...this.state.goals];
    const indexGoal = goals.findIndex(goal => goal._id === i._id);
    goals[indexGoal].paymentAllocated = true;
    this.setState({ accounts, goals });
    this.paidOffGoals();
  };

  handleDeleteAccount = account => {
    const accounts = [...this.state.accounts];
    const index = accounts.findIndex(a => a._id === account._id);
    accounts.splice(index, 1);
    this.setState({ accounts });
    console.log("delete: ", account);
  };

  paidOffGoals = () => {
    const paidGoals = this.state.goals.filter(
      goal => goal.completed === true && goal.paymentAllocated !== true
    );
    this.setState({ paidGoals });

    console.log("paid", paidGoals);
  };

  handleAddGoal = e => {
    e.preventDefault();
    const goals = [this.state.newGoal, ...this.state.goals];
    this.setState({ goals });
    const newGoal = { _id: " ", task: " ", note: "" };
    this.setState({ newGoal });
  };

  handleNewGoal = e => {
    const newGoal = { ...this.state.newGoal };
    newGoal.task = e.currentTarget.value;
    newGoal._id = Date.now().toString();
    newGoal.note = "";
    newGoal.childCompleted = false;
    this.setState({ newGoal });
  };

  handleDeleteGoal = goal => {
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g._id === goal._id);
    goals.splice(index, 1);
    this.setState({ goals });
    console.log("delete: ", goal);
  };

  handleChildCompletedGoal = goal => {
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g._id === goal._id);
    goals[index].childCompleted = !goals[index].childCompleted;
    this.setState({ goals });
  };

  handleChildFixedGoal = goal => {
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g._id === goal._id);
    goals[index].fixed = true;
    goals[index].note = "";
    this.setState({ goals });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar paidGoals={this.state.paidGoals} />
        <Switch>
          <Route
            path="/accounts"
            render={props => (
              <Accounts
                {...props}
                accounts={this.state.accounts}
                paidGoals={this.state.paidGoals}
                handleAddMoneyToAccount={this.handleAddMoneyToAccount}
              />
            )}
          />
          <Route
            path="/goals"
            render={props => (
              <Goals
                {...props}
                goals={this.state.goals}
                handleAddGoal={this.handleAddGoal}
                newGoal={this.state.newGoal}
                handleNewGoal={this.handleNewGoal}
                handleDeleteGoal={this.handleDeleteGoal}
                handleChildCompletedGoal={this.handleChildCompletedGoal}
                handleChildFixedGoal={this.handleChildFixedGoal}
              />
            )}
          />
          <Route
            path="/admin"
            render={props => (
              <Admin
                {...props}
                accounts={this.state.accounts}
                goals={this.state.goals}
                paidGoals={this.state.paidGoals}
                handleAdminSubmit={this.handleAdminSubmit}
                handleAdminPayment={this.handleAdminPayment}
                handlePaymentChange={this.handlePaymentChange}
                handleAddAccount={this.handleAddAccount}
                newAccount={this.state.newAccount}
                handleAccountChange={this.handleAccountChange}
                handleAccountEdit={this.handleAccountEdit}
                handleDeleteAccount={this.handleDeleteAccount}
              />
            )}
          />
          <Route
            path="/"
            render={props => (
              <Home
                {...props}
                accounts={this.state.accounts}
                goals={this.state.goals}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
