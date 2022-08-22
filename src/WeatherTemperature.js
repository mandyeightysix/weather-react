import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="row sm-12">
        <div className="col-8">
          <div className="weather-temperature">
            <div className="temperature-container d-flex justify-content-end">
              <canvas width="52" height="52"></canvas>
              <span className="temp" id="temperature">
                {Math.round(props.celsius)}
              </span>
              <span className="units">
                °C|{" "}
                <a href="/" onClick={showFahrenheit}>
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row sm-12">
        <div className="col-8">
          <div className="weather-temperature">
            <div className="temperature-container d-flex justify-content-end">
              <canvas width="52" height="52"></canvas>
              <span className="temp" id="temperature">
                {Math.round(props.convertToFahrenheit())}
              </span>
              <span className="units">
                <a href="/" onClick={showCelsius}>
                  °C{" "}
                </a>{" "}
                | °F
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
