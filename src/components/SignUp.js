import React from "react";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="registration-form">
        <form>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="phone-number"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="birth-date"
              placeholder="Birth Date"
            />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-block create-account">
              Create Account
            </button>
          </div>
        </form>
        <div className="social-media">
          <h5>Sign up with social media</h5>
          <div className="social-icons">
            <a href="/fb">
              <i className="icon-social-facebook" title="Facebook"></i>
            </a>
            <a href="/google">
              <i className="icon-social-google" title="Google"></i>
            </a>
            <a href="/twitter">
              <i className="icon-social-twitter" title="Twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
