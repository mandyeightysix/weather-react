import React from "react";
import WeatherBird from "./WeatherBird";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!</h1>
        <WeatherBird city="Hamilton" />
      </header>
    </div>
  );
}

export default App;
