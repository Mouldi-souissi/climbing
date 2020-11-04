import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isAuth, setAuth] = useState(false);

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
        setAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ isAuth, login, register }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
