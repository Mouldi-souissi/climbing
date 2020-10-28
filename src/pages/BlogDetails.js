import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import GlobalContext from "../GlobalContext";

function BlogDetails() {
  const { posts, getAllPostes, getPostById, post } = useContext(GlobalContext);
  const { id } = useParams();

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
      <div className="blog-single gray-bg" style={{ marginTop: "50px" }}>
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-lg-8 ">
              <article
                className="article card shadow-sm"
                style={{ borderRadius: "20px" }}
              >
                <div className="article-img">
                  <img src={post.image} title="" alt="" />
                </div>
                <div className="article-title">
                  <h6>
                    <a href="/">Lifestyle</a>
                  </h6>
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
