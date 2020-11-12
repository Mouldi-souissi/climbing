import React from "react";

const ProfileSettings = () => {
  return (
    <div className="container">
      <div className="card shadow-sm p-4" style={{ borderRadius: "20px" }}>
        <h2 className="mb-5">Settings</h2>
        {/* <img
          className="rounded-circle mx-auto mb-5"
          alt="avatar"
          src="https://www.gravatar.com/avatar/1234566?size=200&d=mm"
          height="100px"
          width="100px"
        /> */}
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label text-muted">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label text-muted">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label text-muted">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label text-muted">Avatar url</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary float-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
