import React from "react";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <span>
      {Math.round(props.celsius)}
      <span className="unit">°C</span>
    </span>
  );
}
