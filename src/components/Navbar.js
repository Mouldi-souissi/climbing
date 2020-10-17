import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import GlobalContext from "../GlobalContext";

const Navbar = () => {
  const { isConnected } = useContext(GlobalContext);
  const handleLogout = () => {
    window.localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-light navbar-expand-lg transparent">
      <Link className="navbar-brand" to="/">
        Climbing
      </Link>
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
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts" activeclassname="active">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/events" activeclassname="active">
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop" activeclassname="active">
              Shop
            </NavLink>
          </li>
        </ul>
        <div role="navigation" className="mt-3 mt-lg-0 mt-md-0 ml-auto p-2">
          <div className="d-flex align-items-center">
            {isConnected ? (
              <div>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleLogout}
                >
                  <i
                    className="fa fa-sign-out mr-1"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                  Exit
                </button>
              </div>
            ) : (
              <div>
                <a href="/signIn">
                  <button
                    className="btn btn-outline-primary mr-1"
                    type="button"
                  >
                    Sign In
                  </button>
                </a>
                <a href="/signUp">
                  <button className="btn btn-primary" type="button">
                    Sign up
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
