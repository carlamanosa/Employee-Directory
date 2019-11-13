import React from "react";
import "./employee-card.css";


function EmployeeCard(props) {
    return (
        <div className="card">
      <div className="content">
        <ul>
          <li>
          <strong>Name:</strong> {props.name}
          </li>
          <li>
          <strong>ID:</strong> {props.id}
          </li>
          <li>
          <strong>Company:</strong> {props.company}
          </li>
          <li>
          <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
    </div>
    );
  };








export default EmployeeCard;