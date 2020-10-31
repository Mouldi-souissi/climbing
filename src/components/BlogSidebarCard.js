import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function BlogSidebarCard({ post }) {
  return (
    <div className="latest-post-aside media ">
      <div className="lpa-left media-body">
        <div className="lpa-title">
          <h5>
            <a href="/">{post.title}</a>
          </h5>
        </div>
        <div className="lpa-meta">
          <a className="name" href="/">
            {post.author.name}
          </a>
          <p className="date text-sm text-muted">
            {moment(post.date).calendar()}
          </p>
        </div>
      </div>
      <div className="lpa-right">
        <Link to={`/blog/post${post._id}`}>
          {post.image ? (
            <img src={post.image} alt="" className="card-img-top" />
          ) : (
            <div className="card-img-top bg-dark d-flex align-items-center">
              <p className="mx-auto text-white">No image</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default BlogSidebarCard;
