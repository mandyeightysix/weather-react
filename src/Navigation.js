import "./App.js";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div class="row opacity-50 mb-2 cities">
        <div class="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Vancouver"
            id="vancouver"
          />
        </div>
        <div class="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Saskatoon"
            id="saskatoon"
          />
        </div>
        <div class="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Montreal"
            id="montreal"
          />
        </div>
        <div class="col-3">
          <input
            class="btn btn-outline-dark mb-3"
            type="submit"
            value="Halifax"
            id="halifax"
          />
        </div>
      </div>
      <form id="search-form" class="mb-3">
        <div class="row sm-12">
          <div class="col-8">
            <input
              type="search"
              placeholder="Type in location..."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-2">
            <div class="opacity-50">
              <input class="btn btn-outline-dark" type="submit" />
            </div>
          </div>
          <div class="col-2">
            <div class="opacity-50">
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
