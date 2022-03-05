import React from "react";

import "./DayForecast.css";

export default function DayForecast(props) {
  function maxTemp() {
    let temp = Math.round(props.forecast.temp.max);
    return `${temp}`;
  }

  function minTemp() {
    let temp = Math.round(props.forecast.temp.min);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  function icon() {
    let icon = ` http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`;
    return icon;
  }

  return (
    <div className="dayForcast">
      <div className="day">{day()}</div>
      <div>
        <img className="forecastImg" src={icon()} alt="/" />{" "}
      </div>
      <div>
        <span className="max"> {maxTemp()}°</span>{" "}
        <span className="min"> {minTemp()}°</span>
      </div>
    </div>
  );
}
