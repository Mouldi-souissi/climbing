import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogDelete from "../components/BlogDelete";
import BlogSidebar from "../components/BlogSidebar";
import { PostsContext } from "../contexts/PostsContext";
import jwtDecode from "jwt-decode";
import CommentsSection from "../components/CommentsSection";
import moment from "moment";

function BlogDetails() {
  const [isOwner, setOwner] = useState(false);
  const { posts, getAllPostes, getPostById, post } = useContext(PostsContext);
  const { id } = useParams();

  // check if user has already liked the post
  let actualUser =
    localStorage.getItem("token") &&
    jwtDecode(localStorage.getItem("token")).id;
  let liked = post.likes.find((like) => like.userId === actualUser);

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
    const postUserId = post.author && post.author._id;
    setOwner(postUserId === userId ? true : false);
  }, [post._id, post.content]);
  // calc comment
  const calcComments = (main) => {
    const subs = post.comments.subComments && post.comments.subComments;
    if (subs !== undefined) {
      return main + subs;
    } else {
      return main;
    }
  };
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <BlogDelete id={id} x={post.title.trim()} />

      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-lg-8 ">
            <article className="article" style={{ borderRadius: "20px" }}>
              <h1 className="display-3 text-center">{post.title}</h1>
              <Link to={`/profile${post.author._id}`}>
                <h4 className="text-muted text-center">
                  by {post.author.name}
                </h4>
              </Link>
              <p className="text-secondary text-sm text-center">
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
              <div className="d-flex align-items-center justify-content-between mt-2 ml-2">
                <div className="d-flex justify-content-between">
                  <div className="like mr-2">
                    <i
                      className={`icon-like mr-2 shadowIcon ${
                        liked && "liked"
                      }`}
                      aria-hidden="true"
                      // onClick={() => likePost(post._id)}
                    ></i>
                    {post.likes.length}
                  </div>
                  <div className="comment">
                    <i
                      className="icon-bubble mr-2 shadowIcon"
                      aria-hidden="true"
                    />
                    {calcComments(post.comments.length)}
                  </div>
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
                          <i className="fa fa-pencil-square-o mr-2 pt-2" />
                          Edit Post
                        </div>
                      </Link>
                      <hr className="my-1 py-0" />
                      <div
                        className="dropdown-item btn"
                        data-toggle="modal"
                        data-target={`#${post.title}`}
                      >
                        <i className="fa fa-trash-o mr-2 pb-2" />
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
              <h4 className="">Tags</h4>
              <div className="nav tag-cloud">
                {post.tags.map((tag) => (
                  <a key={tag} href="/" className="btn btn-primary mr-2 mb-1">
                    {tag}
                  </a>
                ))}
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
  );
}

export default BlogDetails;
