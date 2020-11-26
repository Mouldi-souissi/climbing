import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bonus from "../components/Bonus";
import { UserContext } from "../contexts/UserContext";
import FacebookLogin from "react-facebook-login";
import Axios from "axios";

const SignIn = () => {
  const { login, register } = useContext(UserContext);
  const [data, setData] = useState("");
  const [show, setshow] = useState(false);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data.login, data.password);
  };

  let logindRef = null;
  let passwordRef = null;
  let buttonRef = null;
  const handleFocus = (name) => {
    name.focus();
  };

  useEffect(() => {
    logindRef && logindRef.focus();
  }, []);

  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (res) => {
    console.log(res);
    Axios.get("/auth/facebook");
    Axios.get("/auth/facebook/callback");
  };

  return (
    <div className="container mx-auto" style={{ marginTop: "100px" }}>
      <div className="row">
        <div
          className="shadow-sm card p-4 mx-auto mb-5 col-lg-6"
          style={{ borderRadius: "20px" }}
        >
          <div className="card-body">
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="form-icon">
                <h3 className="text-center mb-3">Sign In</h3>
                <div className="avatar mx-auto" />
              </div>
              <div className="mb-4">
                <Bonus />
              </div>
              <div className="form__div">
                <input
                  autoComplete="off"
                  type="text"
                  className="form__input"
                  id="email"
                  placeholder=" "
                  required
                  name="login"
                  onChange={handleInput}
                  ref={(input) => (logindRef = input)}
                  onKeyUp={(e) => {
                    e.keyCode === 13 && handleFocus(passwordRef);
                  }}
                />
                <label className="form__label">Email</label>
              </div>
              <div className="form__div">
                <input
                  type={show ? "text" : "password"}
                  className="form__input"
                  id="password"
                  placeholder=" "
                  required
                  name="password"
                  onChange={handleInput}
                  ref={(input) => (passwordRef = input)}
                  onKeyUp={(e) => {
                    e.keyCode === 13 && handleFocus(buttonRef);
                  }}
                />
                <label className="form__label pb-0">Password</label>
              </div>

              <p
                className="text-right text-muted"
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => setshow(!show)}
              >
                {show ? "Hide" : "Show"} password
                <i
                  className={show ? "fa fa-eye-slash ml-2" : "fa fa-eye ml-2"}
                  aria-hidden="true"
                />
              </p>

              <div className="form-group">
                <button
                  className="btn btn-block btn-primary create-account mb-3"
                  type="submit"
                  ref={(input) => (buttonRef = input)}
                >
                  Login
                </button>
                <FacebookLogin
                  appId="561395128053548"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={responseFacebook}
                  cssClass="btn btn-block btn-outline-primary"
                  icon="fa-facebook mr-2"
                />
              </div>
              <div className="text-center mt-5">
                <Link to="/signUp"> Sign up </Link>
                If you don't have an account!
              </div>
              <p
                className="text-center text-muted mt-3"
                style={{ fontSize: "10px" }}
              >
                If you have forgot your password please click on this link
              </p>
              {/* <div className="social-media text-center">
                <h5>Sign up with social media</h5>

                <div className="social-icons">
                  <a href="/fb" className="mr-3">
                    <i className="icon-social-facebook" title="Facebook"></i>
                  </a>
                  <a href="/google" className="mr-3">
                    <i className="icon-social-google" title="Google"></i>
                  </a>
                  <a href="/twitter" className="mr-3">
                    <i className="icon-social-twitter" title="Twitter"></i>
                  </a>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
