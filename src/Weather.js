import React from "react";
import Time from "./Time";
import WeatherIcon from ".WeatherIcon";
import "./App.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row sm-12">
        <div className="col-12">
          <div className="opacity-50">
            <h1 id="location">{props.data.city}</h1>
          </div>
        </div>
        <div className="row sm-12">
          <div className="col-8">
            <div className="weather-temperature">
              <div className="temperature-container d-flex justify-content-end">
                <canvas width="52" height="52"></canvas>
                <span className="temp" id="temperature">
                  <WeatherIcon code={props.data.icon} />{" "}
                  <WeatherTemperature celsius={props.data.temperature} />
                </span>
                <span className="units">°C|°F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row sm-12">
        <div className="col-12">
          <div className="description-date">
            <ul>
              <li>
                <span id="date">Saturday 14:47</span>,
                <span id="description"> sunny</span>
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%,
                Wind speed:
                <span id="wind">{Math.round(props.data.wind)}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
