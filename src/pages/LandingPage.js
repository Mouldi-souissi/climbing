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
      <Footer />
    </div>
  );
};

export default LandingPage;
