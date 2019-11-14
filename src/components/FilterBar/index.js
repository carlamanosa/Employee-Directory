import React from "react";
import "./style.css";

function FilterBar() {
  return <div class="row" className="filterbar">
   <div class="input-group-prepend">
  <input type="text" id="Name" class="col" placeholder="Name"></input>
  <input type="text" id="ID" class="col" placeholder="ID"></input>
  <input type="text" id="Company" class="col" placeholder="Company"></input>
  <input type="text" id="Email" class="col" placeholder="Email"></input>
  </div>
</div>
}

export default FilterBar;
