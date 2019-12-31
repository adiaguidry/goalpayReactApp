import React, { Component } from "react";

class Goals extends Component {
  state = {};

  render() {
    const goals = this.props.goals.filter(goal => goal.childCompleted !== true);
    const completed = this.props.goals.filter(
      goal => goal.childCompleted === true && goal.completed != true
    );

    return (
      <div className="container">
        <div className="row py-5">
          <h2>Create your Goals</h2>
        </div>
        <div className="row">
          <div className="col-md-7">
            <form onSubmit={this.props.handleAddGoal} className="form-group">
              <label htmlFor="goal">Goal description</label>

              <textarea
                type="text"
                name="goal"
                onChange={this.props.handleNewGoal}
                value={this.props.newGoal.task}
                className="form-control"
                placeholder="Keep room clean, clothes in the laundry basket, books on the bookshelf and bed made"
              />
              <button className="btn btn-primary mt-1">Add</button>
            </form>
            {goals.map(goal => (
              <div className="alert alert-primary">
                <p className="">
                  {goal.task}
                  <button
                    onClick={() => this.props.handleChildCompletedGoal(goal)}
                    className="btn btn-sm btn-success mx-2"
                  >
                    <i class="fa fa-check-circle fa-lg" />
                  </button>
                  <button
                    onClick={this.props.handleDeleteGoal}
                    className="btn btn-sm btn-danger"
                  >
                    <i className="fa fa-trash fa-lg" />
                  </button>
                </p>
                <p className="mb-0">
                  {goal.note && (
                    <span className="text-danger">{goal.note}</span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="col-md-5">
            <h4>
              You've got {completed.length} completed Goals Awaiting Approval
              and Payment
            </h4>

            {completed.map(goal => (
              <div className="alert alert-warning">
                <p>{goal.note && <h3>You've got a goal renturn</h3>}</p>
                <p className="">
                  {goal.task}
                  <button
                    onClick={() => this.props.handleChildCompletedGoal(goal)}
                    className="btn btn-sm btn-warning mx-2"
                  >
                    <i class="fa fa-check-circle fa-lg" />
                  </button>
                </p>
                <p className="mb-0">
                  {goal.note && (
                    <span className="text-danger">
                      {goal.note}
                      <button
                        onClick={() => this.props.handleChildFixedGoal(goal)}
                        className="btn"
                      >
                        fix it
                      </button>
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
