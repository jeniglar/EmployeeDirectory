import React, { Component } from "react";
import "./style.css";
import employees from "../../employees.json";
import Search from "../Search";
import Header from "../Header";
import Table from "../Table";


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
    const filterSearch = employees.filter(employee => employee.name.includes(this.state.search))
    return (
      <>
      <Header />
      <form>
      <div className="form-group">
        <input
          onChange={this.handleInputChange}
          value={this.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee Name"
          id="search"
        />
        <button onClick={this.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={() => { this.sortOrder() }}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {filterSearch.map(person =>
            <Table
              id={person.id}
              key={person.id}
              name={person.name}
              image={person.image}
              email={person.email}
              phone={person.phone}
            />
          )}
        </tbody>
      </table>
    </>
    );
};

};

export default EmployeeTable;