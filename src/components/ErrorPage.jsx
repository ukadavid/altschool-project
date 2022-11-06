import React from "react";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";
import AltSchoolLogo from "../images/AltSchoolLogo.png";
import ErrorImage from "../images/ErrorImage.png";

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="logo nav">
        <img alt="AltSchool-Logo" src={AltSchoolLogo} />
        <Link to="/">
          <p>Return to Homepage</p>
        </Link>
      </div>
      <div className="center">
        <div className="error__card">
          <img alt="Error-Img" src={ErrorImage} />
          <h3>You have done something my "Nigga".</h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
