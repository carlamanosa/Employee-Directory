import React, { Component } from "react";
import Header from "./components/header/header";
import Wrapper from ".components/Wrapper/Wrapper";
import EmployeeCard from "./components/employee card/employee-card";
import employees from "./components/employees.json";


import "./App.css";


class App extends Component {
  state = {
    employees
  }

  removeEmployee = id =>{

    const employees = this.state.employees.filter(employee => employee.id !== id );

    this.setState({ employees });
  };

  render() {
    return (
    <div className="App">
      <Wrapper>
      <Header />
      {this.state.employees.map(employee => (
        <EmployeeCard 
          removeEmployee={this.removeEmployee}
          name={name.id}
          id={employee.id}
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
