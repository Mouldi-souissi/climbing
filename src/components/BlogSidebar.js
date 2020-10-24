import React from "react";
import BlogSidebarCard from "./BlogSidebarCard";
import Bonus from "./Bonus";

function BlogSidebar({ posts }) {
  return (
    <div className="col-lg-4 blog-aside">
      <div
        className="widget widget-latest-post shadow-sm card"
        data-aos="flip-up"
      >
        <div className="widget widget-author">
          <div className="widget-title">
            <h3>Author</h3>
          </div>
          <div className="widget-body">
            <div className="media align-items-center">
              <div className="avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  title=""
                  alt=""
                />
              </div>
              <div className="media-body">
                <h6>
                  Hello, I'm
                  <br /> Rachel Roth
                </h6>
              </div>
            </div>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores
            </p>
          </div>
        </div>
        <div className="widget-title text-center">
          <h3>Trending Now</h3>
          <Bonus />
        </div>
        <div className="widget-body">
          {posts.map((post) => (
            <BlogSidebarCard post={post} key={post.publishedAt} />
          ))}
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
