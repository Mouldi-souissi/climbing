import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="col-12">
      <ul className="pagination justify-content-center">
        {/* <li className="page-item disabled">
          <a className="page-link" href="/" tabindex="-1">
            <i className="fas fa-chevron-left"></i>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            1
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="/">
            2 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            <i className="fas fa-chevron-right"></i>
          </a>
        </li> */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className="btn page-link"
              style={{ cursor: "pointer" }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
