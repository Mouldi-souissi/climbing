import JwtDecode from "jwt-decode";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../GlobalContext";
var moment = require("moment");

function BlogCard({ post }) {
  const { likePost } = useContext(GlobalContext);
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
  let day = moment(post.date).format("D");

  // turn html into string
  React.useEffect(() => {
    let content = document.getElementById(post._id);
    if (content) {
      content.innerHTML = textLimit(post.content);
    }
  }, [post]);

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
        <div className="card-body">
          {/* <p className="text-secondary text-center">
            {moment(post.date).calendar()}
          </p> */}
          <h4 className="card-title text-center mb-3">{post.title}</h4>
          <p
            id={post._id}
            data-toggle="tooltip"
            data-placement="top"
            title={post.content}
          ></p>
          <div className="btn-bar ">
            <Link
              to={`/blog/post${post._id}`}
              style={{ textDecoration: "none" }}
            >
              <span>Read More</span>
              <i className="fa fa-arrow-right ml-2" aria-hidden="true" />
            </Link>
            <div className="d-flex float-right">
              <div className="like mr-3">
                <i
                  className={
                    liked
                      ? "fa fa-thumbs-up mr-2 liked"
                      : "fa fa-thumbs-up mr-2"
                  }
                  aria-hidden="true"
                  onClick={() => likePost(post._id)}
                ></i>
                <span>{post.likes.length}</span>
              </div>
              <div className="comment">
                <i className="fa fa-comment mr-2" aria-hidden="true" />
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
