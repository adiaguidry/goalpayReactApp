import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user, paidGoals }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Goals Pay
      </Link>

      <div className="" id="navbarNav">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/accounts">
            Accounts
          </NavLink>
          <NavLink className="nav-item nav-link" to="/goals">
            Goals
          </NavLink>

          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/admin">
                Admin
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>

      {paidGoals.length !== 0 && (
        <p className="alert alert-success text-right p-1">
          <i className="fa fa-money fa-lg mr-1" />
          You just got paid
        </p>
      )}
    </nav>
  );
};

export default NavBar;
