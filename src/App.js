import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/SignIn";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
