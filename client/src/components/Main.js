import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <header>
      <div className="heading__section">
        <h1 className="primary__heading">Student Attendance</h1>
      </div>
      <nav>
      <ul className="nav-links">
          <li><Link to="/">All Students</Link></li>
          <li><Link to="/attendanceform">Mark Attendance</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Main;
