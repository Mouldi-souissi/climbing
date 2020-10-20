import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  const textLimit = (text) => {
    const limit = 150;
    if (text.length > limit) {
      return text.substring(0, limit).concat("...");
    } else {
      return text;
    }
  };
  return (
    <div className="col-sm-6">
      <div className="blog-grid">
        <div className="blog-img">
          <div className="date">
            <span>04</span>
            <label>FEB</label>
          </div>
          <a href="/">
            <img
              src="https://via.placeholder.com/400x200/FFB6C1/000000"
              title=""
              alt=""
            />
          </a>
        </div>
        <div className="blog-info">
          <h5>{post.title}</h5>
          <p>{textLimit(post.body)}</p>
          <div className="btn-bar">
            <div className="px-btn-arrow">
              <Link
                to={`/blog/post${post.id}`}
                style={{ textDecoration: "none" }}
              >
                <span>Read More</span>
              </Link>
              <i className="arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
