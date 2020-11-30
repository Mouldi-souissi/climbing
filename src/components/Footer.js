import React from "react";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import Bonus from "./Bonus";

const Footer = () => {
  return (
    <footer className="footer bg-white py-2" style={{ marginTop: "auto" }}>
      {/* <hr className="mt-0" /> */}
      <div className="container-fluid mb-2">
        <div className="row">
          <div className="col-lg-6 my-auto h-100 text-center  pt-3">
            <ul className="list-inline mb-2">
              <li className="list-inline-item mr-3">
                <a href="/License">License Agreement</a>
              </li>

              <li className="list-inline-item mr-3">
                <a href="/TermsOfUse">Terms of Use</a>
              </li>

              <li className="list-inline-item">
                <a href="/PrivacyPolicy">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              © Climbing 2020. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 my-auto h-100 text-center ">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://www.facebook.com">
                  {/* <i className="fa fa-facebook fa-2x fa-fw"></i> */}
                  <img
                    src={facebook}
                    height="60px"
                    width="60px"
                    alt="facebbok"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" https://twitter.com/">
                  {/* <i className="fa fa-twitter fa-2x fa-fw"></i> */}
                  <img src={twitter} height="60px" width="60px" alt="twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/">
                  {/* <i className="fa fa-instagram fa-2x fa-fw"></i> */}
                  <img src={insta} height="60px" width="60px" alt="insta" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Bonus />
    </footer>
  );
};

export default Footer;
