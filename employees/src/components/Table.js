import React from "react";
// props={
//arrEmpl
// }
function Table(props)  {

    return (
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.arrEmpl.length > 0 ? props.arrEmpl.map(employee => {
            return (

              <tr>
              <th scope="row"><img src={employee.picture.thumbnail} alt="headshot"/></th>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.location.city}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.gender}</td>
            </tr>
            )
          })  :
          <tr> 
          <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr> }
         
        
        
        </tbody>
      </table>
    );
   
}

export default Table;