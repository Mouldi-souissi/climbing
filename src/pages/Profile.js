import React, { useContext } from "react";
import Bonus from "../components/Bonus";
// import back from "../assets/back/back2.jpg";
import Spinner from "../components/Spinner";
import { PostsContext } from "../contexts/PostsContext";

function Profile() {
  const { getProfile } = useContext(PostsContext);
  React.useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="profile" style={{ marginTop: "80px" }}>
      <Spinner />
      <div class="container-fluid profile pt-3">
        <div class="col-md-12">
          <div class="col-md-3 card shadow-sm" style={{ borderRadius: "20px" }}>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt=""
              className="rounded-circle card-img-top mx-auto mt-4"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="card-body">
              <div class="card-title text-center"> Marcus Doe </div>
              <Bonus />

              <div class="profile-menu mt-3">
                <div
                  className=" mb-2"
                  style={{ borderLeft: "2px solid #12b79c" }}
                >
                  <i class="icon-home mr-1 ml-3"></i> My posts
                </div>
                <div className=" mb-2">
                  <i class="icon-settings mr-1 ml-3"></i> Settings
                </div>
                <div className=" mb-2">
                  <i class="icon-logout mr-1 ml-3"></i> Logout
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-11">
            <div className="">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
