import axios from "axios";
import React, { useState } from "react";
import CurrentCity from "./CurrentCity";
import CurrentList from "./CurrentList";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.default);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "d570d29a0c53c6fc7e18883a380de0bc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <CurrentCity
                city={weatherData.city}
                temp={weatherData.temperature}
                date={weatherData.date}
                icon={weatherData.icon}
              />
            </div>
            <div className="col-6">
              <CurrentList
                humidity={weatherData.humidity}
                wind={weatherData.wind}
                description={weatherData.description}
              />
            </div>
          </div>
        </div>
        <div>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city..."
              autoFocus="on"
              onChange={getCity}
              id="search"
            ></input>
            <input type="submit" value="search" id="search-btn"></input>
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
