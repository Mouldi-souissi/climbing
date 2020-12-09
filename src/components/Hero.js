import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero text-center d-flex align-items-center">
      <div className="container-fluid hero-inner">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="hero-text font-weight-bold animate__animated animate__flipInX">
              Are you ready for new{" "}
              <span className="typing mr-2 text-nowrap" data-text="adventures">
                adventures
              </span>
              <span className="text-white">?</span>
            </h1>
            <Link to="/signUp" className="btn btn-primary btn-lg mt-3">
              Learn more »
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
