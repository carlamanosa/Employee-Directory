import React from "react";
import "./employee-card.css";

function EmployeeCard({name, phone, email, gender, dob}) {
    return (
        <div className="card">
      <div className="img-container">
        <img alt="" src="" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>DOB:</strong> {dob}
          </li>
        </ul>
      </div>
    </div>
    );
  }








export default EmployeeCard;