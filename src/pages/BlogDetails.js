import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import GlobalContext from "../GlobalContext";

function BlogDetails() {
  const { posts, getBlog } = useContext(GlobalContext);
  const { id } = useParams();
  const post = "";

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div>
      <div className="blog-single gray-bg" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 ">
              <article className="article">
                <div className="article-img">
                  <img
                    src="https://via.placeholder.com/800x350/87CEFA/000000"
                    title=""
                    alt=""
                  />
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
                  <p>{post.content}</p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                    pretium metus nullam quam aenean sociis quis sem neque vici
                    libero. Venenatis nullam fringilla pretium magnis aliquam
                    nunc vulputate integer augue ultricies cras. Eget viverra
                    feugiat cras ut. Sit natoque montes tempus ligula eget vitae
                    pede rhoncus maecenas consectetuer commodo condimentum
                    aenean.
                  </p>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="/">Design</a>
                  <a href="/">Development</a>
                  <a href="/">Travel</a>
                  <a href="/">Web Design</a>
                  <a href="/">Marketing</a>
                  <a href="/">Research</a>
                  <a href="/">Managment</a>
                </div>
              </article>
              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
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
                        <button className="px-btn theme">
                          <span>Submit</span> <i className="arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <BlogSidebar posts={posts.slice(0, 7)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
