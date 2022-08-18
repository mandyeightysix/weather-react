import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row sm-12">
          <div className="col-12">
            <div className="opacity-50">
              <h1 id="location">Cochrane</h1>
            </div>
          </div>
          <div className="row sm-12">
            <div className="col-8">
              <div className="weather-temperature">
                <div className="temperature-container d-flex justify-content-end">
                  <canvas width="52" height="52"></canvas>
                  <span className="temp" id="temperature">
                    ☀️ {Math.round(temperature)}
                  </span>
                  <span className="units">°C|°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "21d20dbb06095f793410f891f00e7748";
    let city = "Cochrane";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
