import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";
const Login = (props) => {
  return (
    <div className="Login">
      {/* <h1 className="logo">Logo</h1> */}
      <div className="Login-container">
        <div className="Login-inner-container">
          <h2>Login</h2>
          <form className="Login-content">
            <input type="email" placeholder="Email" required />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={8}
            />
            <div className="Login-btn-container">
              <button className="btn login" type="submit">
                Log In
              </button>

              <Link to="/signup" style={{ width: "100%", height: "50%" }}>
                <button
                  className="btn signup"
                  style={{ height: "100%" }}
                  type="button">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
