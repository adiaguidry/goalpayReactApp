import React from "react";

const AdminLayout = ({
  accounts,
  handleAddAccount,
  newAccount,
  handleAccountChange,
  handleAccountEdit
}) => {
  return (
    <div className="col-md-6">
      <h3>Create New Account</h3>
      <form onSubmit={handleAddAccount}>
        <div className="row">
          <div className="col-md-3 form-group">
            <label htmlFor="acount1">Account Name</label>
            <input
              onChange={handleAccountChange}
              name="accountName"
              type="text"
              className="form-control"
              placeholder="Disneyland"
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="goal">Goal Amout</label>
            <input
              value={newAccount.goal}
              onChange={handleAccountChange}
              name="goalAmount"
              type="text"
              className="form-control"
              placeholder="$120.00"
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="current">Current Amout</label>
            <input
              value={newAccount.goal}
              onChange={handleAccountChange}
              name="currentAmount"
              type="text"
              className="form-control"
              placeholder="$10.00"
            />
          </div>
          <div className="col-md-2 form-group">
            <button className="btn btn-primary mt-4">Add</button>
          </div>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Account</th>
            <th>Goal</th>
            <th>Current</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account._id}>
              <td>{account.accountName}</td>
              <td>{account.goalAmount}</td>
              <td>{account.currentAmount}</td>
              <td>
                <button
                  onClick={() => handleAccountEdit(account)}
                  className="btn btn-success mr-1"
                >
                  <i className="fa fa-pencil" />
                </button>

                <button className="btn btn-danger">
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLayout;
