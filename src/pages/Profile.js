import React, { useContext } from "react";
import Bonus from "../components/Bonus";
import BlogCard from "../components/BlogCard";
import { ProfileContext } from "../contexts/ProfileContext";
import { useParams } from "react-router-dom";
import ProfileSettings from "../components/ProfileSettings";
import JwtDecode from "jwt-decode";

function Profile() {
  const { getUserPosts, userPosts, getUser, user } = useContext(ProfileContext);
  const { id } = useParams();
  // get user and posts
  React.useEffect(() => {
    getUserPosts(id);
    getUser(id);
  }, [id]);
  // handle logout
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.replace("/");
  };
  // check owner
  const actuelUser =
    localStorage.getItem("token") &&
    JwtDecode(localStorage.getItem("token")).id;
  let owner = user._id === actuelUser;
  return (
    <div className="container-fluid profile pt-3" style={{ marginTop: "80px" }}>
      <div className="row">
        <div
          className="col-lg-3 card shadow-sm ml-lg-3"
          style={{ borderRadius: "20px", height: "450px" }}
        >
          <img
            src={
              user.avatar
                ? user.avatar
                : "https://www.gravatar.com/avatar/1234566?size=200&d=mm"
            }
            alt=""
            className="rounded-circle card-img-top mx-auto mt-4 img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
          <div className="card-body">
            <h4 className="card-title text-center">{user.name}</h4>
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
              {owner && (
                <div
                  className="nav-link"
                  data-toggle="tab"
                  href="#settings"
                  role="tab"
                >
                  <i className="icon-settings mr-1 ml-3"></i> Settings
                </div>
              )}
              {owner && (
                <div className="nav-link" onClick={handleLogout}>
                  <i className="icon-logout mr-1 ml-3"></i> Logout
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-md-3 ">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="about-me"
              role="tabpanel"
            >
              <div
                className="card shadow-sm p-5"
                style={{ borderRadius: "20px" }}
              >
                <h1>About me</h1>
                <p>{user.aboutMe}</p>
              </div>
            </div>
            <div className="tab-pane fade" id="my-posts" role="tabpanel">
              <div className="d-flex flex-wrap">
                {userPosts.map((post) => (
                  <BlogCard post={post} key={post._id} />
                ))}
              </div>
            </div>
            <div className="tab-pane fade" id="settings" role="tabpanel">
              <ProfileSettings user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
