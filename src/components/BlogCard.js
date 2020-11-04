import JwtDecode from "jwt-decode";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../contexts/PostsContext";
var moment = require("moment");

function BlogCard({ post }) {
  const { likePost } = useContext(PostsContext);
  // text limiting ...
  const textLimit = (text) => {
    const limit = 200;
    if (text.length > limit) {
      return text.substring(0, limit).concat("...");
    } else {
      return text;
    }
  };
  // formatting date for date card
  let month = moment(post.date).format("MMM");
  let day = moment(post.date).format("DD");

  // turn html into string
  React.useEffect(() => {
    let content = document.getElementById(post._id);
    if (content) {
      content.innerHTML = textLimit(post.content);
    }
  }, [post._id, post.content]);

  // check if user has already liked the post
  let actualUser =
    localStorage.getItem("token") &&
    JwtDecode(localStorage.getItem("token")).id;
  let liked = post.likes.find((like) => like.userId === actualUser);
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
          <Link to={`/blog/post${post._id}`} style={{ textDecoration: "none" }}>
            {post.image ? (
              <img
                src={post.image}
                alt=""
                className="card-img-top rounded"
                max-height="300"
              />
            ) : (
              <div className="card-img-top bg-dark d-flex align-items-center">
                <p className="mx-auto text-white">No image</p>
              </div>
            )}
          </Link>
        </div>
        <div className="card-body flex-column">
          <h4 className="card-title text-center mb-3">
            {post.title}
            <small className="text-muted ml-1">by {post.author.name}</small>
          </h4>
          <p
            id={post._id}
            data-toggle="tooltip"
            data-placement="top"
            title={post.content}
          ></p>
          <div className="btn-bar align-self-end d-flex justify-content-between">
            <Link
              to={`/blog/post${post._id}`}
              style={{ textDecoration: "none" }}
            >
              <span>Read More</span>
              <i className="fa fa-arrow-right ml-2" aria-hidden="true" />
            </Link>
            <div className="right d-flex justify-content-between">
              <div className="like mr-2">
                <i
                  className={`fa fa-thumbs-up mr-2 shadowIcon ${
                    liked && "liked"
                  }`}
                  aria-hidden="true"
                  onClick={() => likePost(post._id)}
                ></i>
                <span>{post.likes.length}</span>
              </div>
              <div className="comment">
                <i
                  className="fa fa-comment mr-2 shadowIcon"
                  aria-hidden="true"
                />
                <span>{post.comments.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
