import "./App.js";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="row opacity-50 mb-2 cities">
        <div className="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Vancouver"
            id="vancouver"
          />
        </div>
        <div className="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Saskatoon"
            id="saskatoon"
          />
        </div>
        <div className="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Montreal"
            id="montreal"
          />
        </div>
        <div className="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Halifax"
            id="halifax"
          />
        </div>
      </div>
      <form id="search-form" className="mb-3">
        <div className="row sm-12">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type in location..."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-2">
            <div className="opacity-50">
              <input class="btn btn-outline-dark" type="submit" />
            </div>
          </div>
          <div className="col-2">
            <div className="opacity-50">
              <button id="geo-location" class="btn btn-outline-dark">
                <i class="fa-solid fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
