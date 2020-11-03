import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogDelete from "../components/BlogDelete";
import BlogSidebar from "../components/BlogSidebar";
import GlobalContext from "../GlobalContext";
import jwtDecode from "jwt-decode";
import CommentsSection from "../components/CommentsSection";
import moment from "moment";

function BlogDetails() {
  const [isOwner, setOwner] = useState(false);
  const { posts, getAllPostes, getPostById, post } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    getPostById(id);
    getAllPostes();

    //  html to text
    let content = document.getElementById(post._id);
    if (content) {
      content.innerHTML = post.content;
    }

    // scroller position top
    window.scroll(0, 0);

    // checking if user is the owner of this post

    let token = localStorage.getItem("token") && localStorage.getItem("token");
    let decodedToken = token && jwtDecode(token);
    const userId = decodedToken && decodedToken.id;
    const postUserId = post.author && post.author.userId;
    setOwner(postUserId === userId ? true : false);
  }, [getAllPostes, getPostById, id, post._id, post.content]);
  return (
    <div className="article" style={{ marginTop: "100px" }}>
      <BlogDelete id={id} x={post.title.trim()} />
      <div className="blog-single">
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-lg-8 ">
              <article className="article" style={{ borderRadius: "20px" }}>
                <h1 className="display-3">{post.title}</h1>
                <h4 className="text-muted">by {post.author.name}</h4>
                <p className="text-secondary text-sm">
                  {moment(post.date).calendar()}
                </p>
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
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="btn-group">
                    <button className="btn-primary btn btn-sm mr-1">
                      <i className="fa fa-thumbs-up mr-1 fa-fw fa-1x shadowIcon" />
                      {post.likes.length}
                    </button>
                    <button className="btn-outline-primary btn btn-sm">
                      <i className="fa fa-thumbs-down mr-1 fa-fw fa-1x shadowIcon" />
                      {post.likes.length}
                    </button>
                  </div>
                  {isOwner && (
                    <div className="btn-group dropleft float-right">
                      <button
                        type="button"
                        className="btn btn-transparent"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          className="fa fa-cog fa-2x shadowIcon"
                          aria-hidden="true"
                        />
                      </button>
                      <div className="dropdown-menu p-0 shadow-sm">
                        <Link
                          to={{
                            pathname: `/createPost${post._id}`,
                            state: true,
                          }}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div className="dropdown-item">
                            <i class="fa fa-pencil-square-o mr-2 pt-2" />
                            Edit Post
                          </div>
                        </Link>
                        <hr className="my-1 py-0" />
                        <div
                          className="dropdown-item btn"
                          data-toggle="modal"
                          data-target={`#${post.title}`}
                        >
                          <i class="fa fa-trash-o mr-2 pb-2" />
                          Delete Post
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="article-content mt-5">
                  <p id={post._id}></p>
                </div>
                <hr />
                <h4 className="mt-5 mb-3">Tags</h4>
                <div className="nav tag-cloud mb-5">
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
                <hr />
              </article>

              <CommentsSection post={post} isOwner={isOwner} />
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
