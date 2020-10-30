import React, { Component } from "react";
import "./style.css";
import Search from "../Search";
import Header from "../Header";
import employees from "../../employees.json"

class EmployeeTable extends Component {
  state = {
    employees: employees,
    search: "",
    sort: "ASC"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      search: ""
    });
  };

  compare(a, b) {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  };

  sortOrder() {
    const currentSort = this.state.sort ? "ASC" : "DESC";
    this.setState({ sort: currentSort });
    const sortedEmployee = this.state.employees.sort(this.compare);
    this.setState({ employees: sortedEmployee })
  };


render() {
  return (
    <>
      <Header />
      <Search />
      <tr className="container">
        <th >Image</th>
        <th className="btn" onClick={() => { this.sortOrder() }}>Name</th>
        <th>Phone Number</th>
        <th>Email</th>
      </tr>
    </>
  )
}




};

export default EmployeeTable;