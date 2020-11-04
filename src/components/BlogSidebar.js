import React from "react";
import BlogAuthorCard from "./BlogAuthorCard";
import BlogSidebarCard from "./BlogSidebarCard";
import Bonus from "./Bonus";

function BlogSidebar({ posts, showAuthor, post }) {
  return (
    <div className="col-lg-4 blog-aside">
      {showAuthor && <BlogAuthorCard post={post} />}
      <div
        className="widget widget-latest-post shadow-sm card"
        data-aos="flip-up"
      >
        <div className="widget-title text-center">
          <h3>Trending Now</h3>
          <Bonus />
        </div>
        <div className="widget-body">
          {posts.map((post) => (
            <BlogSidebarCard post={post} key={post._id} />
          ))}
        </div>
      </div>

      <div className="widget widget-tags shadow-sm card" data-aos="flip-up">
        <div className="widget-title text-center">
          <h3>Latest Tags</h3>
          <Bonus />
        </div>
        <div className="widget-body">
          <div className="nav tag-cloud">
            {posts.map((post) =>
              post.tags.map((tag) => (
                <a key={tag} href="/" className="btn btn-primary mr-2 mb-1">
                  {tag}
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
