import React, { Component } from "react";

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = { isConnected: "" };

  // Method to update state
  login = (login, password) => {
    if (login === "mouldi" && password === "mouldi") {
      localStorage.setItem("token", "token");
      this.setState({
        isConnected: true,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { isConnected } = this.state;
    const { login } = this;

    return (
      <GlobalContext.Provider
        value={{
          isConnected,
          login,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
