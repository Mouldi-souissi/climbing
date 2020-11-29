import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  return (
    <tr className="d-flex align-items-center">
      <td className="number text-center">1</td>
      <td className="image">
        <img src={item.pics[0]} alt="" />
      </td>
      <div className="float-right">
        <td className="price"> {item.name}</td>
        {/* <td className="product">{item.description}</td> */}
        <td className="price text-right">Price: {item.price} T.N.D</td>
      </div>
    </tr>
  );
};

export default ShopCard;
