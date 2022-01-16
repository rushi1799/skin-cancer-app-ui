import React from "react";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <div className="Signup">
      <h1 className="logo">Logo</h1>
      <div className="Signup-container">
        <div className="Signup-inner-container">
          <h2>Sign Up</h2>
          <form className="Signup-content">
            <input type="email" placeholder="Email" required />
            <input
              type="number"
              placeholder="Mobile no"
              required
              minLength={10}
              maxLength={10}
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={8}
            />
            <div className="Signup-btn-container">
              <button className="btn login" type="submit">
                Sign Up
              </button>

              <Link to="/Login" style={{ width: "100%", height: "40%" }}>
                <button
                  className="btn signup"
                  style={{ height: "100%" }}
                  type="button">
                  Log in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
