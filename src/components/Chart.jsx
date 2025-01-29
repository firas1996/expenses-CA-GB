import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = () => {
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
  return (
    <div className="chart">
      {chartData.map((item) => {
        return <ChartBar label={item.label} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
