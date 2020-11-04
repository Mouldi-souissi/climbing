import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import { PostsContext } from "../contexts/PostsContext";
import BlogSidebar from "../components/BlogSidebar";
import SearchBar from "../components/SearchBar";

function Blog() {
  const { posts, getAllPostes } = useContext(PostsContext);

  useEffect(() => {
    getAllPostes();
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="blog-listing pt-5" style={{ marginTop: "78px" }}>
      <div className="container-fluid">
        <SearchBar />
        <div className="row align-items-start">
          <div className="col-lg-8">
            <div className="row">
              {currentPosts &&
                currentPosts.map((post) => (
                  <BlogCard post={post} key={post._id} />
                ))}
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
            </div>
          </div>

          <BlogSidebar posts={posts.slice(0, 7)} showAuthor={false} />
        </div>

        <div className="go-up float-right">
          <i
            className="fa fa-arrow-up btn btn-primary mb-3  px-3 py-3"
            aria-hidden="true"
            onClick={() =>
              window.scroll({
                top: 0,
                behavior: "smooth",
              })
            }
          ></i>
        </div>
      </div>
    </section>
  );
}

export default Blog;
