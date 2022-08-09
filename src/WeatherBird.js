import "./App.js";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row">
        <div class="col-2">
          <div class="weather-forecast-date">Fri</div>
          <span>🌦️</span>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">31°</span>
            <span class="weather-forecast-temperature-min">18°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="weather-forecast-date">Sat</div>
          <span>🌦️</span>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">32°</span>
            <span class="weather-forecast-temperature-min">18°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="weather-forecast-date">Sun</div>
          <span>☀️</span>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">28°</span>
            <span class="weather-forecast-temperature-min">16°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="weather-forecast-date">Mon</div>
          <span>☁️</span>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">33°</span>
            <span class="weather-forecast-temperature-min">15°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="weather-forecast-date">Tue</div>
          <span>🌧️</span>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">27°</span>
            <span class="weather-forecast-temperature-min">19°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="weather-forecast-date">Wed</div>
          <span>☁️</span>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">27°</span>
            <span class="weather-forecast-temperature-min">16°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
