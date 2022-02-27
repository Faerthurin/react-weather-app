import React from "react";

import "./CurrentList.css";

export default function CurrentList(props) {
  return (
    <div>
      <ul>
        <li className="desc">{props.description}</li>
        <li>Wind: {props.wind} km/h</li>
        <li>Humidity: {props.humidity} %</li>
      </ul>
    </div>
  );
}
