import React from "react";

function Search(props) {
  return (
    <div class="row justify-content-center">
    <div className="row bg-dark">
        <form className="form-inline">
            <div class="input-group input-group-sm ml-3">
              <div class="input-group-prepend inline">
              
              </div>
              <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                placeholder="Search"
                type="text"
                class="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
        </form>
      </div>
      </div>
  );
}

export default Search;
