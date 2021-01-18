import React, { useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

const ProfileSettings = ({ user }) => {
  const [isEditing, setEditing] = useState(false);
  const [data, setData] = useState({});
  const { editUser } = React.useContext(ProfileContext);
  // text limiting ...
  const textLimit = (text) => {
    const limit = 20;
    if (text.length > limit) {
      return text.substring(0, limit).concat("...");
    } else {
      return text;
    }
  };
  // show edit
  const handleShowEdit = (e) => {
    e.preventDefault();
    setEditing(!isEditing);
  };
  // handle input form
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // handle edit profile
  const handleEdit = (e) => {
    e.preventDefault();
    editUser(data);
    setEditing(false);
  };
  return (
    <div className="container">
      <div className="card shadow-sm p-4" style={{ borderRadius: "20px" }}>
        <h2 className="mb-5">Settings</h2>
        {/* <img
          className="rounded-circle mb-5"
          alt="avatar"
          src="https://www.gravatar.com/avatar/1234566?size=200&d=mm"
          height="100px"
          width="100px"
        /> */}
        <form onSubmit={(e) => handleEdit(e)}>
          <div className="form-group row">
            <label className="col-sm-2 text-muted">Name</label>
            {isEditing ? (
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.name}
                  name="name"
                  onChange={handleInput}
                />
              </div>
            ) : (
              <p className="col-sm-10">{user.name}</p>
            )}
          </div>
          <div className="form-group row">
            <label className="col-sm-2 text-muted">Email</label>
            {isEditing ? (
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  defaultValue={user.email}
                  name="email"
                  onChange={handleInput}
                />
              </div>
            ) : (
              <p className="col-sm-10">{user.email}</p>
            )}
          </div>
          {/* <div className="form-group row">
            <label className="col-sm-2 text-muted">Password</label>
            {isEditing ? (
              <div className="col-sm-10">
                <input type="password" className="form-control" />
              </div>
            ) : (
              <p className="col-sm-10">{}</p>
            )}
          </div> */}
          <div className="form-group row">
            <label className="col-sm-2 text-muted">Avatar url</label>
            {isEditing ? (
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user.avatar}
                  name="avatar"
                  onChange={handleInput}
                />
              </div>
            ) : (
              <p className="col-sm-10">
                {user.avatar && textLimit(user.avatar)}
              </p>
            )}
          </div>
          <div className="form-group row">
            <label className="col-sm-2 text-muted">About me</label>
            {isEditing ? (
              <div className="col-sm-10">
                <textarea
                  type="text"
                  className="form-control"
                  defaultValue={user.aboutMe}
                  name="aboutMe"
                  onChange={handleInput}
                />
              </div>
            ) : (
              <p className="col-sm-10">{user.aboutMe}</p>
            )}
          </div>
          <div className="float-right mt-3">
            <button
              className="btn btn-outline-primary mr-2"
              onClick={(e) => handleShowEdit(e)}
            >
              {isEditing ? "Reset" : "Edit"}
            </button>
            {isEditing && (
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
