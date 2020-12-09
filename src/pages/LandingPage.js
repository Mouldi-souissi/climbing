import React from "react";
import Bonus from "../components/Bonus";
import Features from "../components/Features";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div style={{ marginTop: "78px" }}>
      <Hero />
      <Bonus />
      <Features />

      <div className="go-up float-right">
        <i
          className="fa fa-arrow-up btn-outline-primary btn mb-3 btn-lg px-3 py-3 mt-3 mr-3"
          aria-hidden="true"
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
          }
        ></i>
      </div>
    </div>
  );
};

export default LandingPage;
