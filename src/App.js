import React,{useEffect, useState} from "react";
import Header from "./components/header/header";
import MainContainer from "./components/Main Container/main-container";
import EmployeeCard from "./components/employee card/employee-card";

import "./App.css";

const 

useEffect( async() =>{
 getEmployees();
}, []);

const getEmployees = async ()=> {
  const response = await fetch(`https://randomuser.me/api/?results=200&nat=us`);
}



function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <EmployeeCard name={results.name.first} phone={results.phone} email={results.email} gender={results.gender} dob={results.dob.date} image={results.picture.medium} />
      </MainContainer>
    </div>
  );
}

export default App;
