// import JwtDecode from "jwt-decode";
import React from "react";
import { Redirect, Route } from "react-router-dom";

// let token = localStorage.getItem("token") && localStorage.getItem("token");
// let decodedToken = token && JwtDecode(localStorage.getItem("token")).name;

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signIn" />
      )
    }
  />
);
