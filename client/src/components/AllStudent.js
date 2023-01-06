import React, { useEffect, useState } from "react";
import "./AllStudent.css";
import moment from "moment";
import api from "./api";
const AllStudent = () => {
  const [students, setStudents] = useState();
  const [active, setActive] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const str = `${year}-${month}-${day}`;
        const response = await api.get(`/api/v1/students/${str}`);
        setActive(response.data.active);
        setStudents(response.data.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleCheckOut = async (e, Id) => {
    e.preventDefault();
    try {
      const response = await api.patch(`/api/v1/students/checkout/${Id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="section-allstudent">
      <div className="heading__section-allstudent">
        <h2 className="heading-secondary">All Students</h2>
      </div>
      <div style={{ marginBottom:"30px" }}>
        <h2 className="heading-secondary">Active Students:- {active}</h2>
      </div>
      <div className="student__table">
        {students &&
          Object.keys(students).map((item) => (
            <div className="container" key={students[item]._id}>
              <div className="name__section">
                <h1>{students[item].name}</h1>
                <h4>
                  Roll Number :- <span>{students[item].rollNumber}</span>
                </h4>
              </div>
              <div className="box">
                <div className="checkout__section">
                  Checkin at:-{" "}
                  <span>
                    {moment(students[item].checkinTime).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </span>
                </div>
                {!students[item].checkout ? (
                  <div
                    className="button__section"
                    onClick={(e) => handleCheckOut(e, students[item]._id)}
                  >
                    <button className="btn btn--green btn--small">
                      CheckOut
                    </button>
                  </div>
                ) : (
                  <div className="checkout__section">
                    Checkout at:-{" "}
                    <span>
                      {moment(students[item].checkoutTime).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllStudent;
