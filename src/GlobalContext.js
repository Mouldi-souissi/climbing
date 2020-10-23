import Axios from "axios";
import React, { Component } from "react";

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = { isConnected: "", posts: [] };

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
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
      this.setState({ posts: res.data })
    );
  };

  componentDidMount() {
    this.setState({ isConnected: localStorage.getItem("token") });
  }

  render() {
    const { children } = this.props;
    const { isConnected, posts } = this.state;
    const { login, logOut, getBlog } = this;

    return (
      <GlobalContext.Provider
        value={{
          isConnected,
          login,
          logOut,
          getBlog,
          posts,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
