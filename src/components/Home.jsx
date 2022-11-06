import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import AltSchoolLogo from "../images/AltSchoolLogo.png";
import { SEO } from "../exports/Exports";

const Home = () => {
  return (
    <>
      <SEO
        title={"Custom Counter App"}
        description={"AltSchool Africa Second Semester Exam Project"}
        name={"Tobechukwu Uka"}
      />
      <div className="home">
        <div className="logo">
          <img alt="AltSchool Logo" src={AltSchoolLogo} />
        </div>
        <div className="center">
          <div className="homepage">
            <h1>Counter Exam Description</h1>
            <p>
              This is a custom counter project programmed using React that has the following functions.
            </p>
            <ul>
              <li>Increment function</li>
              <li>Decrement function</li>
              <li>Reset function</li>
              <li>SetValue function</li>
            </ul>
            <Link to="/counter">
              <button>Project Showcase</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
