import axios from "axios";
import React, { Component } from "react";
import jwt_decode from "jwt-decode";

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
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => this.setState({ posts: res.data }))
    //   .catch((err) => console.log(err));
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=35a21465f13d4792be5906b1af6a851c"
      )
      .then((res) => this.setState({ posts: res.data.articles }))
      .catch((err) => console.log(err));
  };

  getPostById = (id) => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=35a21465f13d4792be5906b1af6a851c"
      )
      .then((res) =>
        this.setState({
          post: res.data.articles.filter((post) => post.publishedAt === id)[0],
        })
      )
      .catch((err) => console.log(err));
  };

  createPost = (title, image, content) => {
    window.open("/postPreview");
  };

  componentDidMount() {
    let decoded = jwt_decode(localStorage.getItem("token"));
    this.setState({ isConnected: decoded });
  }

  render() {
    const { children } = this.props;
    const { isConnected, posts, post } = this.state;
    const { login, logOut, getBlog, getPostById, createPost, register } = this;

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
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
