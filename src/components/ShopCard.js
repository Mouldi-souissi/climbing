import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  return (
    <tr>
      <td className="number text-center">1</td>
      <td className="image">
        <img src={item.pics[0]} alt="" />
      </td>
      <td className="product">
        <Link to={`/shop/${item._id}`}>
          <strong>{item.name}</strong>
          <br />
          {item.description}
        </Link>
      </td>

      <td className="rate text-right">
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </span>
      </td>
      <td className="price text-right">{item.price}</td>
    </tr>
  );
};

export default ShopCard;
