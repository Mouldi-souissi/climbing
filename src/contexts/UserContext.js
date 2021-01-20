import React, { createContext, useState } from "react";
import axios from "axios";
import JwtDecode from "jwt-decode";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isAuth, setAuth] = useState(false);
  const [message, setMessage] = useState("");

  // register
  const register = (email, password, name) => {
    axios
      .post("http://localhost:5000/api/user/register", {
        email,
        password,
        name,
      })
      .then(() => login(email, password))
      .catch((err) => console.log(err));
  };

  // login
  const login = (email, password) => {
    axios
      .post("http://localhost:5000/api/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data);
        window.location.replace("/blog");
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data);
        }
      });
  };

  // is auth
  const checkAuth = () => {
    let token = localStorage.getItem("token") && localStorage.getItem("token");
    let decodedToken = token && JwtDecode(token).id;
    setAuth(decodedToken);
  };

  // logout
  const logout = () => {
    setAuth(false);
  };

  return (
    <UserContext.Provider
      value={{ isAuth, login, register, checkAuth, logout, message }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
