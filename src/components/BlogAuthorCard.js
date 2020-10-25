import React from "react";

function BlogAuthorCard({ post }) {
  return (
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
            <h6>{post.author}</h6>
          </div>
        </div>
        <p>I love climbing, plz like and share my article</p>
      </div>
    </div>
  );
}

export default BlogAuthorCard;
