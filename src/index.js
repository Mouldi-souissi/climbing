import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Footer from "./components/Footer";
import UserContextProvider from "./contexts/UserContext";
import PostsContextProvider from "./contexts/PostsContext";
import ProfileContextProvider from "./contexts/ProfileContext";
import EventContextProvider from "./contexts/EventContext";
import ShopContextProvider from "./contexts/ShopContext";
import AdminContextProvider from "./contexts/AdminContext";

ReactDOM.render(
  <UserContextProvider>
    <PostsContextProvider>
      <ProfileContextProvider>
        <EventContextProvider>
          <ShopContextProvider>
            <AdminContextProvider>
              <App />
              <Footer />
            </AdminContextProvider>
          </ShopContextProvider>
        </EventContextProvider>
      </ProfileContextProvider>
    </PostsContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
