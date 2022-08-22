import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather.js";
import "./App.js";

export default function Navigation() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.main[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "21d20dbb06095f793410f891f00e7748";
    const units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Navigation">
        <div className="row opacity-50 mb-2 cities">
          <div className="col-3">
            <input
              className="btn btn-outline-dark mb-3"
              type="submit"
              value="Vancouver"
              id="vancouver"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-outline-dark mb-3"
              type="submit"
              value="Saskatoon"
              id="saskatoon"
            />
          </div>
          <div className="col-3">
            <input
              class="btn btn-outline-dark mb-3"
              type="submit"
              value="Montreal"
              id="montreal"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-outline-dark mb-3"
              type="submit"
              value="Halifax"
              id="halifax"
            />
          </div>
        </div>
        <form
          className="mb-3"
          role="search"
          id="search-form"
          onSubmit={handleSubmit}
        >
          <div className="row sm-12">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type in location..."
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="col-2">
              <div className="opacity-50">
                <input class="btn btn-outline-dark" type="submit" />
              </div>
            </div>
            <div className="col-2">
              <div className="opacity-50">
                <button id="geo-location" class="btn btn-outline-dark">
                  <i className="fa-solid fa-location-arrow"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
