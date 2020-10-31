import axios from "axios";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";

// tokenInfo
let token = localStorage.getItem("token") && localStorage.getItem("token");
let decodedToken = token && jwtDecode(token);

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = { isConnected: "", posts: [], post: "" };

  // user
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

  // post
  getBlog = () => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=35a21465f13d4792be5906b1af6a851c"
      )
      .then((res) => this.setState({ posts: res.data.articles }))
      .catch((err) => console.log(err));
  };

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

  createPost = ({ title, image, content }) => {
    axios
      .post(
        "http://localhost:5000/api/posts/add",
        {
          title,
          image,
          content,
          name: decodedToken.name,
          userId: decodedToken.id,
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

  likePost = (id) => {
    axios
      .put(`http://localhost:5000/api/posts/like${id}`, {
        name: decodedToken && decodedToken.name,
        userId: decodedToken && decodedToken.id,
      })
      .then(() => {
        this.getAllPostes();
      });
  };

  componentDidMount() {
    this.setState({ isConnected: localStorage.getItem("token") });
  }

  render() {
    const { children } = this.props;
    const { isConnected, posts, post } = this.state;
    const {
      login,
      logOut,
      getBlog,
      getPostById,
      createPost,
      register,
      getAllPostes,
      deletePost,
      likePost,
      editPost,
    } = this;

    return (
      <GlobalContext.Provider
        value={{
          isConnected,
          login,
          logOut,
          getBlog,
          posts,
          getPostById,
          post,
          createPost,
          register,
          getAllPostes,
          deletePost,
          likePost,
          editPost,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
