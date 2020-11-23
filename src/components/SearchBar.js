import React, { useState } from "react";
import SvgAnimation from "./SvgAnimation";

function SearchBar({ setSearchResut }) {
  const [search, setSearch] = useState();
  const handleEnter = (e) => {
    if (e.charCode === 13) {
      setSearchResut(search && search.trim().toLocaleLowerCase());
    }
  };
  return (
    <div
      className="container card p-5 shadow-sm mb-5"
      style={{
        borderRadius: "20px",
        position: "relative",
        background: "rgba(255,255,255,.9)",
        maxWidth: "1000px",
      }}
    >
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <SvgAnimation />
        </div>
        <input
          type="text"
          className="form-control mr-3"
          placeholder="Search . . ."
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleEnter}
        ></input>
        <button
          className="btn btn-primary"
          onClick={() =>
            setSearchResut(search && search.trim().toLocaleLowerCase())
          }
        >
          <i className="fa fa-search fa-lg" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
