import React, { Component } from "react"
import Table from "../components/Table"
import api from "../utils/api"
import Search from "../components/search"

class Employee extends  Component {
    state = {
        arrEmpl: []
    };
   componentDidMount(){
       api.getEmployees().then(response => {
           
        this.setState({ arrEmpl: response.data.results })
       })
   }
    handleTableChange = () => {
     // this.setState({ });
    };

    render() {
        return(
            <>
               <Search />
              <Table arrEmpl={this.state.arrEmpl}  />              
            </>
        )
    }
  
}
export default Employee;