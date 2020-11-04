import React, { createContext, useState } from "react";
import axios from "axios";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: "",
    author: {},
    likes: [],
    comments: [],
    tags: [],
  });

  // get all posts
  const getAllPostes = () => {
    axios
      .get("http://localhost:5000/api/posts", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  //get post by id
  const getPostById = (id) => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  };

  // create post
  const createPost = ({ title, image, content, tags }) => {
    axios
      .post(
        "http://localhost:5000/api/posts/add",
        {
          title,
          image,
          content,
          tags,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        getPostById(res.data._id);
        window.location.replace(`/blog/post${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  // edit post
  const editPost = (id, data) => {
    axios
      .put(`http://localhost:5000/api/posts/edit${id}`, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getPostById(id);
        window.location.replace(`/blog/post${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  // delete post
  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/api/posts/delete${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then(() => window.open("/blog"))
      .catch((err) => console.log(err));
  };
  // like post
  const likePost = (id) => {
    axios({
      url: `http://localhost:5000/api/posts/like${id}`,
      method: "put",
      headers: { token: localStorage.getItem("token") },
    })
      .then(() => {
        getPostById(id);
        // this.forceUpdate();
      })
      .catch((err) => console.log(err));
  };

  // comment a post
  const addComment = (id, comment) => {
    axios
      .post(`http://localhost:5000/api/posts/addComment${id}`, comment, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then(() => {
        getPostById(id);
      })
      .catch((err) => console.log(err));
  };

  // delete comment by owner
  const deleteCommentByOwner = (postId, commentId) => {
    axios({
      url: `http://localhost:5000/api/posts/deleteComment/${postId}/${commentId}`,
      method: "put",
      headers: { token: localStorage.getItem("token") },
    })
      .then(() => {
        getPostById(postId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        post,
        getAllPostes,
        getPostById,
        editPost,
        deleteCommentByOwner,
        deletePost,
        addComment,
        createPost,
        likePost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
