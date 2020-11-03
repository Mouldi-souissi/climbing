import React from "react";

function BlogAuthorCard({ post }) {
  return (
    <div className="widget widget-author">
      <div className="widget-title text-center"></div>
      <div className="widget-body">
        <div className="media">
          <img
            src="https://www.gravatar.com/avatar/1234566?size=200&d=mm"
            alt="avatar"
            className="rounded-circle mr-3 align-self-start"
            height="70px"
          />

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
