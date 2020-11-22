import React from "react";
import { useHistory, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Bonus from "../components/Bonus";

const BlogTag = () => {
  const posts = useHistory().location.state;
  const { tag } = useParams();
  return (
    <div className="container-fluid" style={{ marginTop: "80px" }}>
      <h2 className="pt-5 text-center">{tag}</h2>
      <Bonus />
      <div className="row align-items-start">
        <div className="col-lg-8 mt-md-5">
          <div className="row">
            {posts.map((post) => (
              <BlogCard post={post} key={post._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogTag;
