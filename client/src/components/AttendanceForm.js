import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./AttendanceForm.css";

const AttendanceForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [rollno, setRollno] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const day = new Date().getDate();
      const str = `${year}-${month}-${day}`;
      const response = await api.post("/api/v1/students/attendance", {
        name,
        rollNumber: rollno,
        checkin: str,
      });
      navigate("/");
      setName("");
      setRollno();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="section__attendance-form">
      <div className="heading__section-attendance">
        <h2 className="heading-secondary">Attendance Form</h2>
      </div>
      <form className="form form-user-data">
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            required
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="rollno">
            Roll Number
          </label>
          <input
            className="form__input input__number"
            type="number"
            required
            id="rollno"
            name="rollno"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
          />
        </div>
        <div className="form__group right" onClick={handleSubmit}>
          <button className="btn btn--green btn--small">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
