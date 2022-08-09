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
            href="https://github.com/mandyeightysix/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Amanda Pepin - hosted on{" "}
          <a
            class="host-link"
            href="https://jade-frangollo-c19f1f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
