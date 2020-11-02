import axios from "axios";
import React, { Component } from "react";

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = { isConnected: "", posts: [], post: "" };

  // user route

  // register
  register = (email, password, name) => {
    axios
      .post("http://localhost:5000/api/user/register", {
        email,
        password,
        name,
      })
      .then(() => this.login(email, password))
      .catch((err) => console.log(err));
  };

  // login
  login = (email, password) => {
    axios
      .post("http://localhost:5000/api/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data);
        this.setState({
          isConnected: true,
        });
      })
      .catch((err) => console.log(err));
  };
  logOut = () => {
    this.setState({ isConnected: "" });
  };

  // post route

  // get all posts
  getAllPostes = () => {
    axios
      .get("http://localhost:5000/api/posts", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => console.log(err));
  };

  //get post by id
  getPostById = (id) => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) =>
        this.setState({
          post: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  // create post
  createPost = ({ title, image, content }) => {
    axios
      .post(
        "http://localhost:5000/api/posts/add",
        {
          title,
          image,
          content,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        this.setState({});
        this.getAllPostes();
        window.location.replace(`/blog/post${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  // edit post
  editPost = (id, data) => {
    axios
      .put(`http://localhost:5000/api/posts/edit${id}`, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.setState({});
        this.getAllPostes();
        // window.location.replace(`/blog/post${res.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  // delete post
  deletePost = (id) => {
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
  likePost = (id) => {
    axios({
      url: `http://localhost:5000/api/posts/like${id}`,
      method: "put",
      headers: { token: localStorage.getItem("token") },
    })
      .then(() => {
        this.getAllPostes();
      })
      .catch((err) => console.log(err));
  };

  // comment a post
  addComment = (id, comment) => {
    axios
      .post(`http://localhost:5000/api/posts/addComment${id}`, comment, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then(() => {
        this.getPostById(id);
      })
      .catch((err) => console.log(err));
  };

  // delete comment by owner
  deleteCommentByOwner = (postId, commentId) => {
    axios({
      url: `http://localhost:5000/api/posts/deleteComment/${postId}/${commentId}`,
      method: "put",
      headers: { token: localStorage.getItem("token") },
    })
      .then(() => {
        this.getPostById(postId);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.setState({ isConnected: localStorage.getItem("token") });
  }

  render() {
    const { children } = this.props;
    const { isConnected, posts, post } = this.state;
    const {
      login,
      register,
      logOut,
      getAllPostes,
      getPostById,
      createPost,
      editPost,
      deletePost,
      likePost,
      addComment,
      deleteCommentByOwner,
    } = this;

    return (
      <GlobalContext.Provider
        value={{
          isConnected,
          login,
          logOut,
          posts,
          getPostById,
          post,
          createPost,
          register,
          getAllPostes,
          deletePost,
          likePost,
          editPost,
          addComment,
          deleteCommentByOwner,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
