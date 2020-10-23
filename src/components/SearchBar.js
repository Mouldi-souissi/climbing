import React from "react";

function SearchBar() {
  return (
    <div
      className="container card p-5 shadow-sm mb-5"
      style={{
        borderRadius: "20px",
        position: "relative",
        background: "rgba(255,255,255,.9)",
      }}
    >
      <div className="row ml-5">
        <input
          type="text"
          className="form-control col-6 mr-3"
          placeholder="Search . . ."
        ></input>
        <button className="btn btn-primary">
          <i class="fa fa-search fa-lg" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
