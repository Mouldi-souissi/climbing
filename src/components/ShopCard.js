import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  return (
    <tbody>
      <tr align="center">
        <td className="image">
          <Link to={`/shop/${item._id}`} key={item._id}>
            <img src={item.pics[0]} alt="" />
          </Link>
        </td>
        <td className="price"> {item.name}</td>
        <td className="price text-right">Price: {item.price} T.N.D</td>
      </tr>
    </tbody>
  );
};

export default ShopCard;
