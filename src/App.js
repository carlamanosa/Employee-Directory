import React from "react";
import Header from "./components/header/header";
import Wrapper from ".components/Wrapper/Wrapper";
import EmployeeCard from "./components/employee card/employee-card";
import employees from "./components/employees.json";


import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <EmployeeCard name={results.name.first} phone={results.phone} email={results.email} gender={results.gender} dob={results.dob.date} image={results} />
      </Wrapper>
    </div>
  );
}

export default App;
