import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";

import "./CurrentCity.css";

export default function CurrentCity(props) {
  return (
    <div>
      <h1>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        ></img>
        <Temperature celsius={props.temp} />
      </h1>
      <h2>{props.city}</h2>
      <Date date={props.date} />
    </div>
  );
}
