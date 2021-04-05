import React, { Component } from "react";
import Table from "../components/Table";
import api from "../utils/api";
import Search from "../components/Search";

class Employee extends Component {
  state = {
    arrEmpl: [],
    arrEmpl2: [],
    search: "",
  };
  componentDidMount() {
    api.getEmployees().then((response) => {
      this.setState({ arrEmpl: response.data.results, arrEmpl2: response.data.results });
    });
  }
 

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

    const filteredEmpl = this.state.arrEmpl2.filter((employee) => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase()) 
    })
    this.setState({ arrEmpl: filteredEmpl })
    

    console.log(value)
  };

  handleSearch = (event) => {
    event.preventDefault();
    const currentSearch = event.target.value;
    this.setState({
      search: currentSearch
    });
  };
  //handle toggle change

  handleToggleChange = (event) => {
      const sortedEmpl = this.state.arrEmpl.sort((a, b) => {
             return a.name.first.localeCompare(b.name.first) 
      })

    this.setState({
      arrEmpl: sortedEmpl
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Employee Management</h1>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table
          currentEmployees={this.state.arrEmpl}
          search={this.handleSearch}
          toggleChange={this.handleToggleChange}
          sort={this.handleSort}
        />
      </div>
    );
  }
}
export default Employee;
