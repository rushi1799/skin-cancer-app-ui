import React from "react";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <div>
        <h1 style={{ textAlign: "center", fontSize: 70 }}>
          404, Page Not Found
        </h1>
        <div className="Landing-text-btn-container">
          <Link to="/">
            <button className="Landing-text-btn active">
              Click here <FontAwesomeIcon icon={faHome} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
