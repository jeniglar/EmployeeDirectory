import React, { Component } from "react";
import "./style.css";
import Search from "../Search";
import Header from "../Header";
import employees from "../../employees.json"

class EmployeeTable extends Component {
    state = {
      employees: employees,
      search: "",
      sort: "ascending"
    };

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

compare(a, b) {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
};
  
sortOrder = event => {
  const currentSort = this.state.sort ? "ascending" : "descending";
  this.setState ({ sort: currentSort });
  const sortedEmployee = this.state.employees.sort(this.compare);
  this.setState ({ employees: sortedEmployee })
};

render () {
  return (
    <>
    <Header/>
    <Search/>
    </>
  )
}




};

export default EmployeeTable;