import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import GlobalContext from "../GlobalContext";

function Blog() {
  const { posts, getBlog } = useContext(GlobalContext);

  useEffect(() => {
    getBlog();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossOrigin="anonymous"
      />
      <section className="blog-listing gray-bg pt-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <div className="row">
                {currentPosts &&
                  currentPosts.map((post) => (
                    <BlogCard post={post} key={post.id} />
                  ))}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                />
              </div>
            </div>

            <div className="col-lg-4 m-15px-tb blog-aside">
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
                      <h6>
                        Hello, I'm
                        <br /> Rachel Roth
                      </h6>
                    </div>
                  </div>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                </div>
              </div>

              <div className="widget widget-post">
                <div className="widget-title">
                  <h3>Trending Now</h3>
                </div>
                <div className="widget-body"></div>
              </div>

              <div className="widget widget-latest-post">
                <div className="widget-title">
                  <h3>Latest Post</h3>
                </div>
                <div className="widget-body">
                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="/">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="/">
                          Rachel Roth
                        </a>
                        <a className="date" href="/">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="/">
                        <img
                          src="https://via.placeholder.com/400x200/E6E6FA/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="/">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="/">
                          Rachel Roth
                        </a>
                        <a className="date" href="/">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="/">
                        <img
                          src="https://via.placeholder.com/400x200/FFA07A/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="/">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="/">
                          Rachel Roth
                        </a>
                        <a className="date" href="/">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="/">
                        <img
                          src="https://via.placeholder.com/400x200/FFF0F5/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="widget widget-tags">
                <div className="widget-title">
                  <h3>Latest Tags</h3>
                </div>
                <div className="widget-body">
                  <div className="nav tag-cloud">
                    <a href="/">Design</a>
                    <a href="/">Development</a>
                    <a href="/">Travel</a>
                    <a href="/">Web Design</a>
                    <a href="/">Marketing</a>
                    <a href="/">Research</a>
                    <a href="/">Managment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
