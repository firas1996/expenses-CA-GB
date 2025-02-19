import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
  const chartData = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Fev" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Avr" },
    { value: 0, label: "Mai" },
    { value: 0, label: "Jun" },
    { value: 0, label: "Jui" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];
  for (let i = 0; i < data.length; i++) {
    chartData[data[i].date.getMonth()].value += data[i].price;
  }
  // console.log(chartData);
  const max = Math.max(...chartData.map((item) => item.value)); //(item) => { return item.value}
  // console.log(max);
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            value={item.value}
            max={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
