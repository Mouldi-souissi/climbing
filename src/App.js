import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import Page404 from "./pages/Page404";
import { PrivateRoute } from "./PrivateRoute";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BlogAddEdit from "./pages/BlogAddEdit.";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import EventAddEdit from "./pages/EventAddEdit";
import EventDetails from "./pages/EventDetails";
import BlogTag from "./pages/BlogTag";
import ScrolToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <Router>
        <Route path="/" component={Navbar} />
        <ScrolToTop>
          <Switch>
            {/* home */}
            <Route exact path="/" component={LandingPage} />
            {/* sign in/up */}
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
            {/* blog */}
            <PrivateRoute exact path="/blog" component={Blog} />
            <PrivateRoute exact path="/blog/post:id" component={BlogDetails} />
            <PrivateRoute exact path="/createPost:id" component={BlogAddEdit} />
            <PrivateRoute exact path="/blogTag:tag" component={BlogTag} />
            {/* events */}
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/events/:id" component={EventDetails} />
            <PrivateRoute exact path="/addEvent:id" component={EventAddEdit} />
            {/* shop */}
            <PrivateRoute exact path="/shop" component={Shop} />
            <PrivateRoute exact path="/shop/:id" component={ShopDetails} />
            {/* profile */}
            <PrivateRoute exact path="/profile:id" component={Profile} />
            {/* 404 */}
            <Route component={Page404} />
          </Switch>
        </ScrolToTop>
      </Router>
    </div>
  );
}

export default App;
