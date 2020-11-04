import React, { useContext, useEffect, useState } from "react";
import Bonus from "../components/Bonus";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const SignUp = () => {
  const { register } = useContext(UserContext);
  const [data, setData] = useState("");
  const [show, setshow] = useState(false);
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
    <div className="container mx-auto" style={{ marginTop: "100px" }}>
      <div className="row">
        <div
          className="shadow-sm card p-4 mx-auto mb-5 col-lg-6"
          style={{ borderRadius: "20px" }}
        >
          <div className="card-body">
            <form onSubmit={(e) => handleRegister(e)}>
              <div className="form-icon">
                <h3 className="text-center mb-3">Sign Up</h3>
                <div className="avatar mx-auto" />
              </div>
              <div className="mb-4">
                <Bonus />
              </div>
              <div className="form__div">
                <input
                  type="text"
                  className="form__input"
                  id="password"
                  placeholder=" "
                  name="name"
                  onChange={handleInput}
                />
                <label className="form__label">Username</label>
              </div>

              <div className="form__div">
                <input
                  autoComplete="off"
                  type="text"
                  className="form__input"
                  id="email"
                  placeholder=" "
                  name="email"
                  onChange={handleInput}
                />
                <label className="form__label">Email</label>
              </div>
              <div className="form__div">
                <input
                  type="password"
                  className="form__input"
                  id="password"
                  placeholder=" "
                  name="password"
                  onChange={handleInput}
                />
                <label className="form__label">Password</label>
              </div>
              <p
                className="text-right text-muted"
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => setshow(!show)}
              >
                {show ? "Hide" : "Show"} password
                <i
                  class={show ? "fa fa-eye-slash ml-2" : "fa fa-eye ml-2"}
                  aria-hidden="true"
                />
              </p>

              <div className="form-group">
                <button
                  className="btn btn-block btn-primary create-account"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="text-center mt-5">
                <Link to="/signIn"> Sign In </Link>
                If you already have an account!
              </div>
              <p
                className="text-center text-muted mt-3"
                style={{ fontSize: "10px" }}
              >
                If you have forgot your password please click on this link
              </p>
              <div className="social-media text-center">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
