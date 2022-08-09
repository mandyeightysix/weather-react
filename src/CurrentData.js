import React from "react";

import "./App.css";

export default function CurrentData() {
  return (
    <div className="CurrentData">
      <div class="row sm-12">
        <div class="col-12">
          <div class="opacity-50">
            <h1 id="location">Ottawa</h1>
          </div>
        </div>
        <div class="row sm-12">
          <div class="col-8">
            <div class="weather-temperature">
              <div class="temperature-container d-flex justify-content-end">
                <canvas width="52" height="52"></canvas>
                <span class="temp" id="temperature">
                  ☀️ 29
                </span>
                <span class="units">°C | °F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
