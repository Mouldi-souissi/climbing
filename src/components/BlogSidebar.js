import React from "react";
import blogL from "../assets/blogL.jpg";
import blogL2 from "../assets/blogL2.jpg";
import blogL3 from "../assets/blogL3.jpg";
import Bonus from "./Bonus";

function BlogSidebar() {
  return (
    <div className="col-lg-4 blog-aside">
      <div
        className="widget widget-latest-post shadow-sm card"
        data-aos="flip-up"
      >
        <div className="widget-title text-center">
          <h3>Trending Now</h3>
          <Bonus />
        </div>
        <div className="widget-body">
          <div className="latest-post-aside media ">
            <div className="lpa-left media-body">
              <div className="lpa-title">
                <h5>
                  <a href="/">Prevent 75% of visitors from google analytics</a>
                </h5>
              </div>
              <div className="lpa-meta">
                <a className="name" href="/">
                  Rachel Roth
                </a>
                <a className="date" href="/">
                  26 FEB 2020
                </a>
              </div>
            </div>
            <div className="lpa-right">
              <a href="/">
                <img src={blogL} title="" alt="" />
              </a>
            </div>
          </div>

          <div className="latest-post-aside media">
            <div className="lpa-left media-body">
              <div className="lpa-title">
                <h5>
                  <a href="/">Prevent 75% of visitors from google analytics</a>
                </h5>
              </div>
              <div className="lpa-meta">
                <a className="name" href="/">
                  Rachel Roth
                </a>
                <a className="date" href="/">
                  26 FEB 2020
                </a>
              </div>
            </div>
            <div className="lpa-right">
              <a href="/">
                <img src={blogL2} title="" alt="" />
              </a>
            </div>
          </div>

          <div className="latest-post-aside media">
            <div className="lpa-left media-body">
              <div className="lpa-title">
                <h5>
                  <a href="/">Prevent 75% of visitors from google analytics</a>
                </h5>
              </div>
              <div className="lpa-meta">
                <a className="name" href="/">
                  Rachel Roth
                </a>
                <a className="date" href="/">
                  26 FEB 2020
                </a>
              </div>
            </div>
            <div className="lpa-right">
              <a href="/">
                <img src={blogL3} title="" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="widget widget-tags shadow-sm card" data-aos="flip-up">
        <div className="widget-title text-center">
          <h3>Latest Tags</h3>
          <Bonus />
        </div>
        <div className="widget-body">
          <div className="nav tag-cloud">
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Design
            </a>
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Development
            </a>
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Travel
            </a>
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Web Design
            </a>
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Marketing
            </a>
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Research
            </a>
            <a href="/" className="btn btn-primary mr-2 mb-1">
              Managment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
