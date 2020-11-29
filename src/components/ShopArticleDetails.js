import React, { useContext, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";

function ShopArticleDetails() {
  // context
  const { getItem, item } = useContext(ShopContext);

  // item id
  const { id } = useParams();

  // get item
  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row pt-5 mb-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide col-md-5 col-sm-12 col-xs-12"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/700x400/FFB6C1/000000"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/700x400/87CEFA/000000"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/700x400/87CEFA/000000"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="col-md-6">
          <h2 className="name">
            {item.name}
            <small className="ml-2">
              by <a href="/">{item.seller && item.seller.name}</a>
            </small>
          </h2>
          <hr />
          <h3>
            {item.price}
            <small className="ml-2">T.N.D</small>
          </h3>
          <p>{item.description}</p>
          <hr />
          <button className="btn btn-white btn-default">
            <i className="fa fa-envelope"></i> Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopArticleDetails;
