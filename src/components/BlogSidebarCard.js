import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function BlogSidebarCard({ post }) {
  return (
    <div className="media mb-2">
      <div className="media-body">
        <h6>
          {post.title}
          <span className="text-secondary ml-2">by {post.author.name}</span>
        </h6>
        <p className="date text-sm text-muted">
          {moment(post.date).calendar()}
        </p>
      </div>

      <Link to={`/blog/post${post._id}`}>
        {post.image ? (
          <img
            src={post.image}
            alt=""
            className="img-fluid"
            style={{ Height: "64px", width: "64px" }}
          />
        ) : (
          <div className="card-img-top bg-dark d-flex align-items-center">
            <p className="mx-auto text-white">No image</p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default BlogSidebarCard;
