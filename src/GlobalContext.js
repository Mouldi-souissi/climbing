import axios from "axios";
import React, { Component } from "react";
import { Redirect, useHistory } from "react-router-dom";

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = { isConnected: "", posts: [], post: "" };

  // Method to update state
  login = (login, password) => {
    if (login === "mouldi" && password === "mouldi") {
      localStorage.setItem("token", "token");
      this.setState({
        isConnected: true,
      });
    }
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
    this.setState({ isConnected: localStorage.getItem("token") });
  }

  render() {
    const { children } = this.props;
    const { isConnected, posts, post } = this.state;
    const { login, logOut, getBlog, getPostById, createPost } = this;

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
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
