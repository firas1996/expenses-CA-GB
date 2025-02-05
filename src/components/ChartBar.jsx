import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, value, max }) => {
  const x = (value / max) * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: x }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
