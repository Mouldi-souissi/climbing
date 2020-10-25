import React from "react";
import { Link } from "react-router-dom";
var moment = require("moment");

function BlogCard({ post }) {
  const textLimit = (text) => {
    const limit = 50;
    if (text.length > limit) {
      return text.substring(0, limit).concat("...");
    } else {
      return text;
    }
  };
  let month = moment(post.publishedAt).format("MMM");
  let day = moment(post.publishedAt).format("D");

  return (
    <div className="col-lg-6">
      <div
        className="blog-card card shadow-sm p-3 mb-5"
        data-aos="fade-right"
        style={{ borderRadius: "20px" }}
      >
        <div className="date">
          <span>{day}</span>
          <label style={{ textTransform: "uppercase" }}>{month}</label>
        </div>
        <div className="img">
          <Link
            to={`/blog/post${post.publishedAt}`}
            style={{ textDecoration: "none" }}
          >
            {post.urlToImage ? (
              <img src={post.urlToImage} alt="" className="card-img-top h-50" />
            ) : (
              <div className="card-img-top bg-dark d-flex align-items-center">
                <p className="mx-auto text-white">No image</p>
              </div>
            )}
          </Link>
        </div>
        <div className="card-body">
          <h4
            className="card-title mb-3"
            data-toggle="tooltip"
            data-placement="top"
            title={post.title}
          >
            {textLimit(post.title)}
          </h4>
          <p>{post.content}</p>
          <div className="btn-bar ">
            <Link
              to={`/blog/post${post.publishedAt}`}
              style={{ textDecoration: "none" }}
            >
              <span>Read More</span>
              <i className="fa fa-arrow-right ml-2" aria-hidden="true" />
            </Link>
            <div className="d-flex float-right">
              <div className="like mr-3">
                <i className="fa fa-heart mr-2" aria-hidden="true" />
                <span>10</span>
              </div>
              <div className="comment">
                <i className="fa fa-comment mr-2" aria-hidden="true" />
                <span>7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
