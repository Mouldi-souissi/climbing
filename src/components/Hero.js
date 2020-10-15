import React from "react";

const Hero = () => {
  return (
    <section className="hero text-center d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="hero-text font-weight-bold">
              Are you ready for new adventures ?
            </h1>
            <a href="/signUp" className="btn btn-primary btn-lg mt-3">
              Learn more »
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
