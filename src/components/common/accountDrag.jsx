import React from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "../ItemTypes";

const Dollars = ({ name, amount, pg, handleAddMoneyToAccount }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, amount, _id: pg._id, type: ItemTypes.DOLLARS },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleAddMoneyToAccount(dropResult, item);
        alert(
          `You dropped ${item.amount} into ${dropResult.name} ${dropResult.id}!`
        );
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <small
          amount={amount}
          ref={drag}
          style={{ opacity }}
          className="alert alert-success"
        >
          <i className="fa fa-money fa-lg mr-1" />${pg.paid}
        </small>
      </blockquote>
    </div>
  );
};

export default Dollars;
