import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";
import ShopArticleDetails from "./components/ShopArticleDetails";
import Page404 from "./pages/Page404";
import { PrivateRoute } from "./PrivateRoute";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import SignInUp from "./components/SignInUp";

function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <Router>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signUp" component={SignUp} />
          {/* <Route exact path="/signIn" component={SignIn} /> */}
          <Route exact path="/signIn" component={SignInUp} />
          <PrivateRoute exact path="/shop" component={Shop} />
          <PrivateRoute
            exact
            path="/shop/article:id"
            component={ShopArticleDetails}
          />
          <PrivateRoute exact path="/blog" component={Blog} />
          <PrivateRoute exact path="/blog/post:id" component={BlogDetails} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
