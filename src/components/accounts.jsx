import React, { Component } from "react";

class Accounts extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <h2>Saving Accounts</h2>
        </div>
        <div className="row">
          <div className="col-md-2">
            {this.props.paidGoals.length !== 0 && (
              <div className="card">
                <div className="card-header text-white bg-success h4">
                  You Got Paid
                </div>
                {this.props.paidGoals.map(pg => (
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <div className="money">
                        <div className="card text-white bg-success">
                          {pg.paid}
                        </div>
                      </div>

                      <footer className="blockquote-footer">Dad</footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-10">
            <div className="row">
              {this.props.accounts.map(account => (
                <div className="mx-2 mb-2">
                  <div
                    className="card text-white bg-info"
                    style={{ width: 18 + "rem" }}
                  >
                    <div className="card-header">Saving Account</div>
                    <div className="card-body">
                      <h5 className="card-title">{account.accountName}</h5>
                      <ul
                        key={account._id}
                        className="list-group list-group-flush"
                      >
                        <li
                          key={account._id}
                          className="list-group-item text-body mb-1"
                        >
                          Goal for savings: ${account.goalAmount}
                        </li>
                        <li className="list-group-item text-dark">
                          Current savings: ${account.currentAmount}
                        </li>
                      </ul>
                      <p className="card-text">
                        Keep doing your best, remember why you made your goal
                        and you will be there in no time.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
