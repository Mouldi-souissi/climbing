import React from "react";

function BlogAuthorCard({ post }) {
  return (
    <div className="widget widget-author">
      <div className="widget-title">
        <h3>Author</h3>
      </div>
      <div className="widget-body">
        <div className="media">
          <div className="avatar">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              title=""
              alt=""
              className="align-self-center"
            />
          </div>
          <div className="media-body">
            <h6>{post.author && post.author.name}</h6>
            <p className="ml-3">
              I love climbing, plz like and share my article
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAuthorCard;
