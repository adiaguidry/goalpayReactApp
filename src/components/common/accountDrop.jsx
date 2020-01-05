import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";

const AccountDrop = ({ account }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.DOLLARS,
    drop: () => ({ name: account.accountName, _id: account._id }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  let backgroundColor = "#17a2b8";
  if (isActive) {
    backgroundColor = "#087182";
  } else if (canDrop) {
    backgroundColor = "#60bece";
  }
  return (
    <div ref={drop} className="mx-2 mb-2">
      <div
        className="card text-white "
        style={{ width: 18 + "rem", backgroundColor }}
      >
        <div className="card-header">Saving Account</div>
        <div className="card-body">
          <h5 className="card-title">{account.accountName}</h5>
          <ul key={account._id} className="list-group list-group-flush">
            <li key={account._id} className="list-group-item text-body mb-1">
              Goal for savings: ${account.goalAmount}
            </li>
            <li className="list-group-item text-dark">
              Current savings: ${account.currentAmount}
            </li>
          </ul>
          <p className="card-text">
            Keep doing your best, remember why you made your goal and you will
            be there in no time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDrop;
