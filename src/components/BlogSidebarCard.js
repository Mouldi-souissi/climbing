import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function BlogSidebarCard({ post }) {
  return (
    <div className="media mb-2">
      <div className="media-body">
        <h6 className="text-break">
          {post.title}
          <span className="text-secondary text-sm ml-2">
            by {post.author.name}
          </span>
        </h6>
        <p className="date text-muted" style={{ fontSize: "12px" }}>
          {moment(post.date).format("MMMM Do YYYY")}
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
          <div
            className="card-img-top bg-dark d-flex align-items-cente"
            style={{ Height: "64px", width: "64px" }}
          >
            <p className="mx-auto text-white" style={{ fontSize: "13px" }}>
              No image
            </p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default BlogSidebarCard;
