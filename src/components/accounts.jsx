import React, { Component } from "react";
import AccountDrop from "./common/accountDrop";
import AccountDrag from "./common/accountDrag";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

class Accounts extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <h2>Saving Accounts</h2>
        </div>
        <div className="row">
          <div className="col-md-2 mb-1">
            {this.props.paidGoals.length !== 0 && (
              <div className="card">
                <div className="card-header text-white bg-success h4">
                  You Got Paid
                </div>
                {this.props.paidGoals.map(pg => (
                  <DndProvider backend={Backend}>
                    <AccountDrag
                      handleAddMoneyToAccount={(account, item) =>
                        this.props.handleAddMoneyToAccount(account, item)
                      }
                      name={pg.task}
                      amount={pg.paid}
                      pg={pg}
                      key={pg._id}
                    />
                  </DndProvider>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-10">
            <div className="row">
              {this.props.accounts.map(account => (
                <DndProvider backend={Backend}>
                  <AccountDrop account={account} key={account._id} />
                </DndProvider>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
