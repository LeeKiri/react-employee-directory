import React, { Component } from "react";
import Table from "../components/Table";
import api from "../utils/api";
import Search from "../components/Search";

class Employee extends Component {
  state = {
    arrEmpl: [],
  };
  componentDidMount() {
    api.getEmployees().then((response) => {
      this.setState({ arrEmpl: response.data.results });
    });
  }
  handleTableChange = () => {
    // this.setState({ });
  };

  render() {
    return (
      <>
        <Table arrEmpl={this.state.arrEmpl} />
        <Search />
      </>
    );
  }
}
export default Employee;
