import React, { Component } from "react";
import kid from "../images/goals.jpg";
import totalPaid from "./common/totalPaid";

const Home = ({ accounts, goals }) => {
  const incompleteGoals = goals.filter(g => g.childCompleted !== true);
  const cash = goals.map(goal => goal.paid);
  const DisneyAccount = accounts[0];
  console.log(DisneyAccount);
  return (
    <div className="row m-2">
      <div className="col-md-12">
        <div className="mb-2">
          <div className="card text-white bg-dark">
            <div className="card-body ">
              <h1>GOALS THAT PAY</h1>
              <small>
                You compelete your goals and you get paid. Set up savings
                accounts to help manage your earnings.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
       
            <div className="card-body">
              <h2>
                You got {incompleteGoals.length} incomplete goals
                {incompleteGoals.length !== 0 ? "so get to work." : "."}
              </h2>
              <h5>Heres a quick breakdown of your cash:</h5>
              <h6>
                Your overall cash made from compeleting goals: $
                {totalPaid(cash)}
              </h6>
            
          </div>
      </div>
      <div className="col-md-6">
            <div className="card-body text-center">
              <img width="100%" src={kid} alt="" />
        </div>
      </div>
      <div className="col-md-3">
            <div className="card-body">
              <h2>
                You currenty have {accounts.length} accounts set up toward your
                savings.
              </h2>
              <h5>Heres a quick breakdown of your accounts:</h5>
              <h6>
                Looks like you'll be on your way to {DisneyAccount.accountName}
                soon. You just need $
                {Number(DisneyAccount.goalAmount) -
                  Number(DisneyAccount.currentAmount)}
              </h6>
        </div>
      </div>
      <div className="col-md-12">
        <div className="mb-2 text-center">
          <div className="">
            <h5>GOALS THAT PAY</h5>
            <small>
              Help your child understand how to earn money and allocate their
              earnings.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
