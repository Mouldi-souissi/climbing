import React from "react";

const ShopCard = ({ article }) => {
  return (
    // <div className="card mb-3" style={{ maxWidth: "540px" }}>
    //   <div className="row no-gutters">
    //     <div className="col-md-4">
    //       {article.pics ? (
    //         <img src={article.pics} className="card-img" alt="..." />
    //       ) : (
    //         <svg
    //           className="bd-placeholder-img card-img-top mt-2"
    //           width="100%"
    //           // height='225'
    //           xmlns="http://www.w3.org/2000/svg"
    //           preserveAspectRatio="xMidYMid slice"
    //           focusable="false"
    //           role="img"
    //           aria-label="Placeholder: Thumbnail"
    //         >
    //           <title>Placeholder</title>
    //           <rect width="100%" height="100%" fill="#55595c" />
    //           <text x="30%" y="50%" fill="#eceeef" dy=".3em">
    //             No picture
    //           </text>
    //         </svg>
    //       )}
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <div className="d-flex justify-content-between">
    //           <h5 className="card-title">{article.name}</h5>
    //           <p className="text-warning">{article.price} T.N.D</p>
    //         </div>
    //         <p className="card-text">{article.description}</p>
    //         <p className="card-text">
    //           <small className="text-muted">Last updated 3 mins ago</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <tr>
      <td className="number text-center">1</td>
      <td className="image">
        <img src={article.pics} alt="" />
      </td>
      <td className="product">
        <strong>{article.name}</strong>
        <br />
        This is the product description.
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
