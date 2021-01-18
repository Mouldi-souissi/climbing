import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  //get all user
  const getAllUsers = useCallback(() => {
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   block unblock user
  const blocUser = (id, status) => {
    axios
      .put(
        `http://localhost:5000/api/admin/bloc${id}`,
        { status: status === "active" ? "blocked" : "active" },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <AdminContext.Provider value={{ users, getAllUsers, blocUser }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
