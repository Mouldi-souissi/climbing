import React from "react";

import BlogSidebarCard from "./BlogSidebarCard";
import Bonus from "./Bonus";

function BlogSidebar({ posts }) {
  return (
    <div className="col-lg-4">
      <div
        className="shadow-sm card p-4"
        data-aos="flip-up"
        style={{ borderRadius: "20px" }}
      >
        <div className="mb-4">
          <h3 className="text-center">Trending Now</h3>
          <Bonus />
        </div>

        {posts.map((post) => (
          <BlogSidebarCard post={post} key={post._id} />
        ))}
      </div>

      <div
        className="shadow-sm card p-4 mt-3"
        data-aos="flip-up"
        style={{ borderRadius: "20px" }}
      >
        <div className="text-center mb-3">
          <h3>Latest Tags</h3>
          <Bonus />
        </div>
        <div className="tags">
          {posts.map((post) =>
            post.tags.map((tag) => (
              <a
                key={tag}
                href="/"
                className="btn btn-outline-secondary mr-2 mb-1"
              >
                {tag}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
