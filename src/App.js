import React from "react";
import Navigation from "./Navigation.js";
import CurrentData from "./CurrentData";
import CurrentOverview from "./CurrentOverview";
import WeatherForecast from "./WeatherForecast";

import "./App";

function App() {
  return (
    <div className="container">
      <div className="weatherAppWrapper">
        <div className="weatherApp">
          <Navigation />
          <br />
          <CurrentData />
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
