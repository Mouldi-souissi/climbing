import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const SignIn = () => {
  const { login } = useContext(GlobalContext);
  const [data, setData] = useState("");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data.login, data.password);
  };

  let passwordRef = null;
  let buttonRef = null;
  const handleFocus = (name) => {
    name.focus();
  };

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
              id="email"
              placeholder="Email"
              name="login"
              onChange={handleInput}
              onKeyUp={(e) => {
                e.keyCode === 13 && handleFocus(passwordRef);
              }}
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
              ref={(input) => (passwordRef = input)}
              onKeyUp={(e) => {
                e.keyCode === 13 && handleFocus(buttonRef);
              }}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={handleLogin}
              ref={(input) => (buttonRef = input)}
            >
              Login
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

export default SignIn;
