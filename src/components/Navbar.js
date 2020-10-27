import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import Bonus2 from "./Bonus2";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const [name, setName] = useState("");
  const { isConnected, logOut } = useContext(GlobalContext);
  // let isConnected = localStorage.getItem("token");
  let history = useHistory();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    history.push("/");
    logOut();
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setName(jwt_decode(localStorage.getItem("token")).name);
    }
  }, []);
  return (
    <nav className="navbar navbar-light navbar-expand-lg ">
      <Link className="navbar-brand" to="/">
        <Bonus2 />
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
            <NavLink className="nav-link" to="/blog" activeclassname="active">
              Blog
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
              <div className="d-flex">
                {/* <i
                  class="fa fa-search mr-2 align-self-center fa-lg text-muted btn"
                  aria-hidden="true"
                  onClick={showSearch}
                /> */}
                <Link
                  to="/profile"
                  className="d-flex align-items-end"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="avatar-nav mr-2">
                    <i className="fa fa-circle greenDot" aria-hidden="true" />
                  </div>
                  <h6 className="mr-3 text-muted">{name}</h6>
                </Link>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleLogout}
                >
                  <i
                    className="fa fa-sign-out mr-1"
                    aria-hidden="true"
                    style={{ color: "white" }}
                  />
                  Sign out
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
