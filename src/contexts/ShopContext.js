import React, { createContext, useState } from "react";
import axios from "axios";
import JwtDecode from "jwt-decode";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [items, setItems] = useState([]);

  //   get all items
  const getItems = () => {
    axios
      .get("http://localhost:5000/api/shop", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <ShopContext.Provider value={{ items, getItems }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
