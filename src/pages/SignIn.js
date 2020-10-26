import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

const SignIn = (props) => {
  const { login, isConnected } = useContext(GlobalContext);
  const [data, setData] = useState("");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data.login, data.password);
    // this.props.history.push("/blog");
  };

  let logindRef = null;
  let passwordRef = null;
  let buttonRef = null;
  const handleFocus = (name) => {
    name.focus();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    logindRef.focus();
  }, [logindRef]);
  if (isConnected) {
    return <Redirect to="/blog" />;
  }
  return (
    <div className="sign-up bg-light">
      <div className="registration-form">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
          <div className="form__div">
            <input
              autocomplete="off"
              type="text"
              className="form__input"
              id="email"
              placeholder=" "
              name="login"
              onChange={handleInput}
              ref={(input) => (logindRef = input)}
              onKeyUp={(e) => {
                e.keyCode === 13 && handleFocus(passwordRef);
              }}
            />
            <label for="" class="form__label">
              Email
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              className="form__input"
              id="password"
              placeholder=" "
              name="password"
              onChange={handleInput}
              ref={(input) => (passwordRef = input)}
              onKeyUp={(e) => {
                e.keyCode === 13 && handleFocus(buttonRef);
              }}
            />
            <label for="" class="form__label">
              Password
            </label>
          </div>
          <div className="form-group">
            <button
              className="btn btn-block create-account"
              type="submit"
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
