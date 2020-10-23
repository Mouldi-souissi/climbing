import React from "react";
import Feature1 from "../assets/feature1.jpg";
import Feature2 from "../assets/feature2.jpg";
import Feature3 from "../assets/feature3.jpg";

const Features = () => {
  return (
    <div className="container-fluid">
      {/* <hr className="featurette-divider" /> */}

      <div
        className="row featurette d-flex align-items-center mt-5"
        data-aos="fade-left"
        style={{ marginBottom: "100px" }}
      >
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Participate in climbing and hiking events.{" "}
            <span className="text-muted">Discover beauty around you.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={Feature1}
            alt="feature"
            className="img-fluid"
            width="500"
            height="500"
          />
        </div>
      </div>

      <div
        className="row featurette d-flex align-items-center"
        data-aos="fade-right"
        style={{ marginBottom: "100px" }}
      >
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Organize events.{" "}
            <span className="text-muted">It takes just few clicks.</span>
          </h2>
          <p className="lead mx-5">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={Feature2}
            alt="feature"
            className="img-fluid"
            width="500"
            height="500"
          />
        </div>
      </div>

      <div
        className="row featurette d-flex align-items-center mb-5"
        data-aos="fade-left"
      >
        <div className="col-md-7">
          <h2 className="featurette-heading">
            And lastly, you can sell or buy equipment.{" "}
            <span className="text-muted">be prepared for the ride.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={Feature3}
            alt="feature"
            className="img-fluid"
            width="500"
            height="500"
          />
        </div>
      </div>

      {/* <hr className="featurette-divider" /> */}
    </div>
  );
};

export default Features;
