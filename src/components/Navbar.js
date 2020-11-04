import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { PostsContext } from "../contexts/PostsContext";
import Bonus2 from "./Bonus2";
// import jwtDecode from "jwt-decode";

// token
// let token = localStorage.getItem("token") && localStorage.getItem("token");
// let decodedToken = token && jwtDecode(token);

const Navbar = () => {
  const { isAuth, logOut } = useContext(PostsContext);
  // let isConnected = localStorage.getItem("token");
  let history = useHistory();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    history.push("/");
    logOut();
  };

  return (
    <nav className="navbar navbar-light navbar-expand-lg px-3 py-2">
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
            {isAuth ? (
              <div className="d-flex align-items-center">
                {/* <p className="text-center">
                  {decodedToken && decodedToken.name}
                </p> */}
                <div className="btn-group mr-3">
                  <button
                    type="button"
                    className="btn btn-outline-primary font-weight-bold rounded"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-pencil fa-fw" />
                    ADD
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg-right p-0 shadow-sm"
                    // style={{ borderRadius: "20px" }}
                  >
                    <Link
                      to={{ pathname: "/createPost:0", state: false }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <button className="dropdown-item" type="button">
                        <i className="fa fa-file-o mr-2 pt-2" />
                        Post
                      </button>
                    </Link>
                    <hr className="my-1 py-0" />
                    <button className="dropdown-item" type="button">
                      <i className="fa fa-calendar mr-2 pb-2" />
                      Event
                    </button>
                  </div>
                </div>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="avatar-nav"></div>
                </Link>

                <button
                  className="btn btn-transparent"
                  type="button"
                  onClick={handleLogout}
                >
                  <i
                    className="fa fa-sign-out text-warning fa-2x"
                    aria-hidden="true"
                    style={{
                      color: "white",
                    }}
                  />
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
