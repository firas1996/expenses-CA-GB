import React from "react";
import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses">
      {data.map((item) => {
        return (
          <ExpenseItem title={item.title} date={item.date} price={item.price} />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
