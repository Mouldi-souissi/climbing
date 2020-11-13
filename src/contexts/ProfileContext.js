import React, { createContext, useState } from "react";
import axios from "axios";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState({ name: "" });

  // get user posts by id
  const getUserPosts = (id) => {
    axios
      .get(`http://localhost:5000/api/posts/user/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUserPosts(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getUser = (id) => {
    axios
      .get(`http://localhost:5000/api/user/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  const editUser = (data) => {
    axios
      .put("http://localhost:5000/api/user/edit", data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProfileContext.Provider
      value={{ userPosts, user, getUserPosts, getUser, editUser }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
