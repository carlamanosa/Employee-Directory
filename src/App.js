import React from "react";
import Header from "./components/header/header";
import MainContainer from "./components/Main Container/main-container";
import EmployeeCard from "./components/employee card/employee-card";
import

import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <EmployeeCard name={results.name.first} phone={results.phone} email={results.email} gender={results.gender} dob={results.dob.date} image={results} />
      </MainContainer>
    </div>
  );
}

export default App;
