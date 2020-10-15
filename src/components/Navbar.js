import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Climbing
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/posts">
              Posts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shop">
              Shop
            </a>
          </li>
        </ul>
        <div role="navigation" className="mt-3 mt-lg-0 mt-md-0 ml-auto p-2">
          <div className="d-flex">
            <a href="/signIn">
              <button className="btn btn-outline-primary mr-1" type="button">
                Sign In
              </button>
            </a>
            <a href="/signUp">
              <button className="btn btn-primary" type="button">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
