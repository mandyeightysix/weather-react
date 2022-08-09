import React from "react";
import Navigation from "./Navigation.js";
import CurrentData from "./CurrentData";
import CurrentOverview from "./CurrentOverview";

import "./App";
import WeatherForecast from "./WeatherForecast.js";

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
      </div>
    </div>
  );
}

export default App;
