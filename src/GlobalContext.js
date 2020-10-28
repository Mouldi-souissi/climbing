import axios from "axios";
import React, { Component } from "react";
// import jwt_decode from "jwt-decode";

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = { isConnected: "", posts: [], post: "" };

  // Method to update state
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
        { title, image, content, userId: "mouldi" },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then(() => this.getAllPostes)
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
      logOut,
      getBlog,
      getPostById,
      createPost,
      register,
      getAllPostes,
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
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
