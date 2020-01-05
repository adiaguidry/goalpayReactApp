import React from "react";

const AdminLayout = ({
  accounts,
  handleAddAccount,
  newAccount,
  handleAccountChange,
  handleAccountEdit,
  handleDeleteAccount
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
              placeholder="ex. Dart Wars"
              name="accountName"
              type="text"
              className="form-control"
              value={newAccount.accountName}
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="goal">Goal Amout</label>
            <input
              value={newAccount.goalAmount}
              onChange={handleAccountChange}
              placeholder="20"
              name="goalAmount"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="current">Current Amout</label>
            <input
              value={newAccount.currentAmount}
              onChange={handleAccountChange}
              placeholder="0"
              name="currentAmount"
              type="text"
              className="form-control"
            />
          </div>
          {newAccount._id === "" ? (
            <div className="col-md-2 form-group">
              <button className="btn btn-primary mt-4">Add</button>
            </div>
          ) : (
            <div className="col-md-2 form-group">
              <button className="btn btn-success mt-4">Save Edit</button>
            </div>
          )}
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

                <button
                  onClick={() => handleDeleteAccount(account)}
                  className="btn btn-danger"
                >
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
