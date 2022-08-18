import React from "react";
import Navigation from "./Navigation";
import Weather from "./Weather.js";
import CurrentOverview from "./CurrentOverview.js";
import WeatherForecast from "./WeatherForecast";

import "./App";

function App() {
  return (
    <div className="container">
      <div className="weatherAppWrapper">
        <div className="weatherApp">
          <Navigation />
          <br />
          <Weather />
          <br />
          <CurrentOverview />
          <br />
          <WeatherForecast />
        </div>
        <small>
          {" "}
          <a
            class="source-link"
            href="https://github.com/mandyeightysix/weather-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Amanda Pepin
        </small>
      </div>
    </div>
  );
}

export default App;
