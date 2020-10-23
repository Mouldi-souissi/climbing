import React, { useEffect } from "react";
import Bonus from "../components/Bonus";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Bonus />
      <Features />
      <Bonus />

      <div className="go-up float-right">
        <i
          className="fa fa-arrow-up btn btn-primary mb-3 btn-lg px-3 py-3 mt-3 mr-3"
          aria-hidden="true"
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
          }
        ></i>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
