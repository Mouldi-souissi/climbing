import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-white pb-4" style={{ marginTop: "auto" }}>
      <hr />
      <div className="container-fluid px-3">
        <div className="row">
          <div className="col-lg-6 my-auto h-100 text-center text-lg-left pt-3">
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
          <div className="col-lg-6 my-auto h-100 text-center text-lg-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://www.facebook.com">
                  <i className="fa fa-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" https://twitter.com/">
                  <i className="fa fa-twitter fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
