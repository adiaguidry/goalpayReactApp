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
        paid: "0"
      },
      {
        _id: 2345,
        task: "Fill out daily planner and have Mom or Dad sign it",
        note: "",
        noteStatus: false,
        fixed: false,
        childCompleted: false,
        completed: false,
        paid: "0"
      },
      {
        _id: 3456,
        task: "Clean bathroom when its my turn without being told",
        note: "",
        noteStatus: false,
        fixed: false,
        childCompleted: false,
        completed: false,
        paid: "0"
      }
    ],
    paidGoals: []
  };

  componentDidUpdate(prev, st) {}

  handleAdminSubmit = e => {
    e.preventDefault();
    this.paidOffGoals();
  };

  handlePaymentChange = ({ currentTarget: input }, goal) => {
    //console.log("input name:", input.name);
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g === goal);
    console.log("index", goals[index][input.name]);
    goals[index][input.name] = input.value;
    this.setState({ goals });
  };

  handleAdminPayment = goal => {
    const goals = [...this.state.goals];
    const index = goals.findIndex(g => g === goal);
    goals[index].completed = true;
  };

  handleAddAccount = e => {
    e.preventDefault();
    const accounts = [this.state.newAccount, ...this.state.accounts];
    const newAccount = {
      _id: " ",
      task: " ",
      note: ""
    };
    console.log(newAccount);
    this.setState({ accounts, newAccount });
  };
  handleAccountChange = ({ currentTarget: input }) => {
    const newAccount = { ...this.state.newAccount };
    newAccount._id = Date.now();
    newAccount[input.name] = input.value;
    newAccount[input.name] = input.value;
    newAccount[input.name] = input.value;
    this.setState({ newAccount });
    console.log(newAccount);
  };

  handleAccountEdit = account => {
    const editAccount = {
      _id: account._id,
      accountName: account.accountName,
      goalAmount: account.goalAmount,
      currentAmount: account.currentAmount
    };
    this.setState({ newAccount: editAccount });
    console.log("edit", account);
  };
  paidOffGoals = () => {
    const paidGoals = this.state.goals.filter(goal => goal.completed === true);
    this.setState({ paidGoals });
    console.log(paidGoals);
  };

  handleAddGoal = e => {
    e.preventDefault();
    const goals = [this.state.newGoal, ...this.state.goals];
    this.setState({ goals });
    const newGoal = { _id: " ", task: " ", note: "" };
    this.setState({ newGoal });
    console.log("goal added", this.state.newGoal);
  };

  handleNewGoal = e => {
    const newGoal = { ...this.state.newGoal };
    newGoal.task = e.currentTarget.value;
    newGoal._id = Date.now().toString();
    newGoal.note = "";
    newGoal.childCompleted = false;
    this.setState({ newGoal });
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

  handleDeleteGoal() {
    console.log("goal deleted");
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/accounts"
            render={props => (
              <Accounts
                {...props}
                accounts={this.state.accounts}
                paidGoals={this.state.paidGoals}
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
              />
            )}
          />
          <Route
            path="/"
            render={props => (
              <Home
                {...props}
                accounts={this.state.accounts}
                paidGoals={this.state.paidGoals}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
