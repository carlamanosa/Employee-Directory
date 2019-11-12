import React from "react";
import "./employee-card.css";


function EmployeeCard({name,phone,email,gender,dob}) {

  

  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  
 
    return (
        <div className="card">
      <div className="img-container">
        <img alt="" src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            {name}
          </li>
          <li>
            {phone}
          </li>
          <li>
            {email}
          </li>
          <li>
            {gender}
          </li>
          <li>
            {dob}
          </li>
        </ul>
      </div>
    </div>
    );
  };








export default EmployeeCard;