import React from "react";
import "./styles/Landing.css";
import header from "../assets/header-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
const Landing = (props) => {
  return (
    <div className="Landing">
      <h1 className="Landing-header">Logo</h1>
      <div className="Landing-container">
        <div className="Landing-text">
          <div className="Landing-text-container">
            <h1>
              <p>Skin cancer</p>
              <p> Detection</p>
            </h1>
            <p
              style={{
                letterSpacing: 2,
                paddingLeft: ".2rem",
                fontSize: 20,
                marginTop: "10%",
                color: "rgba(0,0,0,0.7)",
                fontWeight: "bold",
              }}>
              Using Machine Learning !!!
            </p>
            <div className="Landing-text-btn-container">
              <button className="Landing-text-btn">
                Get Started <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="Landing-text-btn">
                Sign In <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </div>
          </div>
        </div>
        <img src={header} alt="img" className="Landing-img" />
      </div>
    </div>
  );
};

export default Landing;
