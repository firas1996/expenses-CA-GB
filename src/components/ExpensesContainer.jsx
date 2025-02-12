import React, { useState } from "react";
import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";
import Filter from "./Filter";

const ExpensesContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((item) => item.date.getFullYear()).sort()),
  ];
  console.log(years);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  return (
    <div className="expenses">
      <Filter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
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
