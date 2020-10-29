import React, { Component } from "react";
import "./style.css";
import Search from "./search";
import Header from "./header";
import employees from "../employees.json"

class employeeTable extends Component {
    state = {
      employees: employees,
      search: "",
      sort: ""
    };

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

render () {
  return
}




};

export default employeeTable;