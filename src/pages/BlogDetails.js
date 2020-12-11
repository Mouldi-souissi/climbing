import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogDelete from "../components/BlogDelete";
import BlogSidebar from "../components/BlogSidebar";
import { PostsContext } from "../contexts/PostsContext";
import jwtDecode from "jwt-decode";
import CommentsSection from "../components/CommentsSection";
import moment from "moment";
import BlogShowLikers from "../components/BlogShowLikers";

function BlogDetails() {
  const { posts, getAllPostes, getPostById, post, likePost } = useContext(
    PostsContext
  );
  const { id } = useParams();

  // check if user has already liked the post
  let actualUser =
    localStorage.getItem("token") &&
    jwtDecode(localStorage.getItem("token")).id;
  let liked = post.likes.find((like) => like._id === actualUser);

  // checking if user is the owner of this post
  const postUserId = post.author && post.author._id;
  const isOwner = postUserId === actualUser ? true : false;

  useEffect(() => {
    getPostById(id);
    getAllPostes();
    //  html to text
    let content = document.getElementById(post._id);
    if (content) {
      content.innerHTML = post.content;
    }

    //
    // showLikers(post.likes);
  }, [post._id, post.content, id, getPostById, getAllPostes]);

  // calc comment
  const calcComments = (main) => {
    const subs = post.comments.subComments && post.comments.subComments;
    if (subs !== undefined) {
      return main + subs;
    } else {
      return main;
    }
  };

  // show likers
  const showLikers = (likes) => {
    if (likes.length > 3) {
      return likes
        .slice(0, 3)
        .concat({ name: `and ${likes.length - 3} more`, _id: "users" });
    } else {
      return likes;
    }
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <BlogDelete id={id} x={post.title.trim()} />
      <BlogShowLikers likes={post.likes} />

      <article className="article row" style={{ borderRadius: "20px" }}>
        <div className="col-lg-12">
          <h1 className="display-3 text-center mb-1 text-break">
            {post.title}
          </h1>
          <Link
            to={`/profile${post.author._id}`}
            style={{ textDecoration: "none" }}
          >
            <h4 className="text-muted text-center by">by {post.author.name}</h4>
          </Link>
          <p className="text-secondary text-sm text-center">
            {moment(post.date).format("MMMM Do YYYY")}
          </p>
          <div className="article-img">
            {post.image ? (
              <img
                src={post.image}
                title=""
                alt=""
                className="card-img rounded"
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
            {/* likes and comments */}
            <div className="d-flex justify-content-between">
              <div className="like mr-2">
                <i
                  className={`icon-like mr-2 ${liked && "liked"}`}
                  aria-hidden="true"
                  onClick={() => likePost(id)}
                ></i>
                {post.likes.length}
              </div>
              <div className="comment">
                <i className="icon-bubble mr-2" aria-hidden="true" />
                {calcComments(post.comments.length)}
              </div>
            </div>
            {/* settings */}
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
                      pathname: `/addPost${post._id}`,
                      state: { isEditing: true, post },
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
          {/* show likers */}
          {showLikers(post.likes).map((like) =>
            like._id === "users" ? (
              <span
                key={like._id}
                style={{ fontSize: "13px", cursor: "pointer" }}
                data-toggle="modal"
                data-target="#staticBackdrop"
              >
                {like.name}
              </span>
            ) : (
              <Link
                key={like._id}
                className="mr-1"
                to={`/profile${like._id}`}
                style={{ fontSize: "13px" }}
              >
                {like.name}
              </Link>
            )
          )}
        </div>
        <div className="col-lg-8">
          {/* article */}
          <div className="article-content mt-5">
            <p id={post._id}></p>
          </div>
          {/* tags */}
          <hr />
          <h4 className="">Tags</h4>
          <div className="nav tag-cloud">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={{
                  pathname: `/blogTag${tag}`,
                  state: posts.filter((post) => post.tags.includes(tag)),
                }}
                className="btn btn-outline-secondary mr-2 mb-1"
              >
                {tag}
              </Link>
            ))}
          </div>
          <hr />
          {/* comments */}
          <CommentsSection post={post} isOwner={isOwner} />
        </div>
        {/* trending */}
        <BlogSidebar posts={posts.slice(0, 7)} showAuthor={true} post={post} />
      </article>
    </div>
  );
}

export default BlogDetails;
