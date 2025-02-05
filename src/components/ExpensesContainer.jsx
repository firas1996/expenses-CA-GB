import React from "react";
import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";
import Filter from "./Filter";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses">
      <Filter />
      <Chart data={data} />
      {data.map((item) => {
        return (
          <ExpenseItem title={item.title} date={item.date} price={item.price} />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
