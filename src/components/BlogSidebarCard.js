import React from "react";
import moment from "moment";

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
            {post.author}
          </a>
          <a className="date" href="/">
            {moment(post.date).calendar()}
          </a>
        </div>
      </div>
      <div className="lpa-right">
        <a href="/">
          {post.image ? (
            <img src={post.image} alt="" className="card-img-top" />
          ) : (
            <div className="card-img-top bg-dark d-flex align-items-center">
              <p className="mx-auto text-white">No image</p>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default BlogSidebarCard;
