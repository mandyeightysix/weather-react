import "./App.css";

export default function CurrentOverview() {
  return (
    <div className="CurrentOverview">
      <div class="row sm-12">
        <div class="col-12">
          <div class="description-date">
            <ul>
              <li>
                <span id="date">Saturday 14:47</span>,
                <span id="description"> sunny</span>
              </li>
              <li>
                Humidity: <span id="humidity">42</span>%, Wind:
                <span id="wind">12</span>Km/H
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
