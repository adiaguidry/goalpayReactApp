import React, { Component } from "react";
import kid from "../images/kid-on-ipad.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="row m-2">
        <div className="col-md-12">
          <div className="mb-2">
            <div className="card text-white bg-dark">
              <div className="card-body">
                <h1>GOALS THAT PAY</h1>
                <h4>You compelete your goals and you get paid</h4>
                <h5>Set up savings accounts to help manage your earnings</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <div className="card text-white bg-success">
              <div className="card-body">
                <h2>
                  You're Rocking your goals and getting paid along the way! You
                  got 8 incomplete goals so get to work.
                </h2>
                <h5>Heres a quick breakdown of your cash:</h5>
                <h6>Your last payment happened on:</h6>
                <h6>As of now your accounts total:</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="">
            <div className="card text-white bg-warning">
              <div className="card-body text-center">
                <img width="100%" src={kid} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <h2>
                  You currenty have 5 accounts set up toward your savings. If
                  you want to add or change that talk to your folks.
                </h2>
                <h5>Heres a quick breakdown of your accounts:</h5>
                <h6>Looks like you'll be on your way to Disney soon</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
