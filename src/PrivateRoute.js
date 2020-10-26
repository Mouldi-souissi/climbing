import React from "react";
import { Redirect, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

let decoded = jwt_decode(localStorage.getItem("token"));

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      decoded ? <Component {...props} /> : <Redirect to="/signIn" />
    }
  />
);
