import React from "react";
import totalPaid from "./totalPaid";
let note = false;
const Goals = ({
  paidGoals,
  goals,
  handleAdminSubmit,
  handleAdminPayment,
  handlePaymentChange
}) => {
  console.log(paidGoals);
  return (
    <div className="col-md-6">
      <h2>Track Goal Payments</h2>
      <small>
        If goal was accomplished send payment; if not send a note to help
        complete goal to standard
      </small>
      {goals.map(goal => (
        <div className="alert alert-primary">
          <p className="">{goal.task}</p>
          <hr />
          <div className="mb-0">
            <form onSubmit={handleAdminSubmit}>
              <div className="form-row align-items-center">
                <select
                  className="form-control col-md-2"
                  onChange={e => handlePaymentChange(e, goal)}
                  name="paid"
                  id="amountToPay"
                  value={goal.paid}
                >
                  <option key="0" value="0">
                    Amount..
                  </option>
                  <option key="1" value=".50">
                    .50
                  </option>
                  <option key="2" value="1.00">
                    $1.00
                  </option>
                  <option key="3" value="1.50">
                    $1.50
                  </option>
                  <option key="4" value="2.00">
                    $2.00
                  </option>
                  <option key="5" value="3.00">
                    $3.00
                  </option>
                </select>

                <button
                  onClick={() => handleAdminPayment(goal)}
                  className="btn btn-info m-1"
                  disabled={goal.paid === "0" ? true : false}
                >
                  Pay
                </button>
                {goal.noteStatus ? (
                  <button
                    onClick={() => (goal.noteStatus = !goal.noteStatus)}
                    className="btn btn-sm-1 btn-danger"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={() => (goal.noteStatus = !goal.noteStatus)}
                    className={
                      goal.note === ""
                        ? "btn m-1 btn-success"
                        : "btn m-1 btn-warning"
                    }
                  >
                    {goal.note === "" ? "Send a Note" : "Note Sent"}
                  </button>
                )}
                {goal.noteStatus && (
                  <div className="col-md-12">
                    <div className="form-row align-items-center">
                      <input
                        value={goal.note}
                        name="note"
                        onChange={e => handlePaymentChange(e, goal)}
                        className="form-control"
                      />
                      <button
                        onClick={() => (goal.noteStatus = !goal.noteStatus)}
                        className="btn m-1 btn-sm btn-success"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-success">
                {goal.fixed && goal.note === ""
                  ? "Note read and fixed! Can I get paid now?"
                  : ""}
              </p>
            </form>
          </div>
        </div>
      ))}
      <div className="card text-white bg-info">
        <h3>Total Paid: {totalPaid(paidGoals)}</h3>
      </div>
    </div>
  );
};

export default Goals;
