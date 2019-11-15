import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import FilterBar from "./components/FilterBar";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div class="app">
      <Jumbotron/>
      <FilterBar/>
      {/* <form className="filterbar">
          <fieldset>
            <input type='name' placeholder='Name'></input>
            <input type='id' placeholder='ID'></input>
            <input type='company' placeholder='Company'></input>
            <input type='email' placeholder='Email'></input>
          </fieldset>
        </form> */}
      <Wrapper>
       
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            company={employee.company}
            email={employee.email}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
