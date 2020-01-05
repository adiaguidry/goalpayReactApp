import React, { Component } from "react";

class Goals extends Component {
  state = {};

  render() {
    const goals = this.props.goals.filter(goal => goal.childCompleted !== true);
    const completed = this.props.goals.filter(
      goal => goal.childCompleted === true && goal.completed !== true
    );
    const notes = this.props.goals.filter(goal => goal.note !== "");
    console.log(this.props);

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-7">
            <h2>Create your Goals</h2>
          </div>
          <div className="col-md-5">
            <h3>Completed Goals</h3>
            {notes.length === 0 ? (
              " "
            ) : (
              <div className="alert alert-danger">
                <p>
                  <i className="fa fa-exclamation fa-lg mr-1" />
                  {notes.length} of your goals came back with a note attached.
                  Fix it to get paid.
                </p>
              </div>
            )}
          </div>
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
                    <i className="fa fa-check-circle fa-lg" />
                  </button>
                  <button
                    onClick={() => this.props.handleDeleteGoal(goal)}
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
            <h6>
              You've got {completed.length} completed Goals Awaiting Approval
              and Payment
            </h6>

            {completed.map(goal => (
              <div className="alert alert-info">
                <p>{goal.note && <h3>You've got a goal renturn</h3>}</p>
                <p className="">{goal.task}</p>
                <p className="mb-0">
                  {goal.note && (
                    <span className="text-danger">
                      {goal.note}
                      <button
                        onClick={() => this.props.handleChildFixedGoal(goal)}
                        className="btn btn-info btn-sm m-1"
                      >
                        Fixed it
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
