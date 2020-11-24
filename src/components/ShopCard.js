import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ article }) => {
  return (
    <tr>
      <td className="number text-center">1</td>
      <td className="image">
        <img src={article.pics} alt="" />
      </td>
      <td className="product">
        <Link to={`/shop/article${article.name}`}>
          <strong>{article.name}</strong>
          <br />
          This is the product description.
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
      <td className="price text-right">{article.price}</td>
    </tr>
  );
};

export default ShopCard;
