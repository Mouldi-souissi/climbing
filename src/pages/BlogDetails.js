import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogDelete from "../components/BlogDelete";
import BlogSidebar from "../components/BlogSidebar";
import GlobalContext from "../GlobalContext";
import jwtDecode from "jwt-decode";

function BlogDetails() {
  const { posts, getAllPostes, getPostById, post } = useContext(GlobalContext);
  const { id } = useParams();
  // checking if user is the owner o this post
  const userId =
    localStorage.getItem("token") &&
    jwtDecode(localStorage.getItem("token")).id;
  const postUserId = post.author && post.author.userId;
  const isOwner = postUserId === userId ? true : false;

  useEffect(() => {
    getAllPostes();
    getPostById(id);
    //  html to text
    let content = document.getElementById(post._id);
    if (content) {
      content.innerHTML = post.content;
    }
    // scroller position top
    window.scroll(0, 0);
  }, [getAllPostes, getPostById, id, post._id, post.content]);
  return (
    <div>
      <BlogDelete id={id} x={post.title && post.title.trim()} />
      <div className="blog-single gray-bg" style={{ marginTop: "70px" }}>
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-lg-8 ">
              <article
                className="article card shadow-sm"
                style={{ borderRadius: "20px" }}
              >
                <div className="article-img">
                  {post.image ? (
                    <img
                      src={post.image}
                      title=""
                      alt=""
                      className="card-img-top rounded"
                    />
                  ) : (
                    <div
                      className="card-img-top bg-dark d-flex align-items-center"
                      style={{ minHeight: "400px" }}
                    >
                      <p className="mx-auto text-white">No image</p>
                    </div>
                  )}
                </div>
                <div className="article-title">
                  <h6>
                    <a href="/">Lifestyle</a>
                  </h6>
                  {isOwner && (
                    <div className="btn-group dropleft float-right">
                      <button
                        type="button"
                        className="btn btn-transparent dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-cog fa-2x " aria-hidden="true" />
                      </button>
                      <div className="dropdown-menu">
                        <Link to={{ pathname: "/createPost", state: true }}>
                          <div className="dropdown-item">Edit Post</div>
                        </Link>

                        <div
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target={`#${post.title}`}
                        >
                          Delete Post
                        </div>
                      </div>
                    </div>
                  )}

                  <h2>{post.title}</h2>
                  <div className="media">
                    <div className="avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        title=""
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <label>Rachel Roth</label>
                      <span>26 FEB 2020</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p id={post._id}></p>
                </div>
                <div className="nav tag-cloud mt-5">
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Design
                  </a>
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Development
                  </a>
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Web Design
                  </a>
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Travel
                  </a>
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Marketing
                  </a>
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Research
                  </a>
                  <a href="/" className="btn btn-primary mr-2 mb-1">
                    Managment
                  </a>
                </div>
              </article>
              <div
                className="contact-form article-comment card shadows-sm mt-3 p-4"
                style={{ borderRadius: "20px" }}
              >
                <h4 className="mb-3">Comment</h4>
                <form id="contact-form" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows="4"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button className="btn btn-primary">
                          <span>Submit</span> <i className="arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <BlogSidebar
              posts={posts.slice(0, 7)}
              showAuthor={true}
              post={post}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
