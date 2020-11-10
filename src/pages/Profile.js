import React, { useContext } from "react";
import Bonus from "../components/Bonus";
// import back from "../assets/back/back2.jpg";
import { PostsContext } from "../contexts/PostsContext";
import BlogCard from "../components/BlogCard";

function Profile() {
  const { getProfile, myPosts } = useContext(PostsContext);
  React.useEffect(() => {
    getProfile();
  }, []);
  return (
    <div
      className="container-fluid profile pt-3 bg-light"
      style={{ marginTop: "80px" }}
    >
      <div className="row">
        <div
          className="col-lg-3 card shadow-sm"
          style={{ borderRadius: "20px", height: "400px" }}
        >
          <img
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            alt=""
            className="rounded-circle card-img-top mx-auto mt-4"
            style={{ width: "100px", height: "100px" }}
          />
          <div className="card-body">
            <div className="card-title text-center"> Marcus Doe </div>
            <Bonus />

            <div className="profile-menu mt-3 nav flex-column" role="tablist">
              <div
                className="nav-link active"
                data-toggle="tab"
                href="#about-me"
                role="tab"
              >
                <i className="icon-user mr-1 ml-3"></i> About me
              </div>
              <div
                className="nav-link"
                data-toggle="tab"
                href="#my-posts"
                role="tab"
              >
                <i className="icon-home mr-1 ml-3"></i> My posts
              </div>
              <div
                className="nav-link"
                data-toggle="tab"
                href="#settings"
                role="tab"
              >
                <i className="icon-settings mr-1 ml-3"></i> Settings
              </div>
              <div className="nav-link">
                <i className="icon-logout mr-1 ml-3"></i> Logout
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 mt-sm-3 mt-lg-0" style={{ height: "100vh" }}>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="about-me"
              role="tabpanel"
            >
              <div
                className="card shadow-sm p-4"
                style={{ borderRadius: "20px" }}
              >
                <h1>About me</h1>
                <p>I like nature and climbing</p>
              </div>
            </div>
            <div className="tab-pane fade" id="my-posts" role="tabpanel">
              <div className="d-flex flex-wrap">
                {myPosts.map((post) => (
                  <BlogCard post={post} key={post._id} />
                ))}
              </div>
            </div>
            <div className="tab-pane fade" id="settings" role="tabpanel">
              home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
