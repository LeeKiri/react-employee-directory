import React from "react";

function Search() {
  return (
    <>
    <div className="row bg-dark">
      <div className="col-lg-5 ml-5 p-1">
        <h5 className="text-white">Search Employees by Gender</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label text-white" for="inlineCheckbox1">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label text-white" for="inlineCheckbox2">
            Male
          </label>
        </div>
      </div>
      <div className="col-lg-5 ml-3 p-1">
        <h5 className="text-white">Sort Employees in Alphabetical Order by Last Name</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
          <label className="form-check-label text-white" for="inlineCheckbox2">
            Alphabetical
          </label>
        </div>
      </div>
      </div>
    </>
  );
}

export default Search;
