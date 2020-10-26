import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const SignUp = () => {
  const { register } = useContext(GlobalContext);
  const [data, setData] = useState("");
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(data.email, data.password, data.name);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sign-up bg-light">
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
              name="name"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleRegister}
            >
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
