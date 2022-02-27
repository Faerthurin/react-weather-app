import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius ");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        {Math.round(props.celsius)}
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {Math.round(fahrenheit())}
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
