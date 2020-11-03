import React from "react";
import SvgAnimation from "./SvgAnimation";

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
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <SvgAnimation />
        </div>
        <input
          type="text"
          className="form-control col-lg-6 mr-3"
          placeholder="Search . . ."
        ></input>
        <button className="btn btn-primary">
          <i className="fa fa-search fa-lg" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
