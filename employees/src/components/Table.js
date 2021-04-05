import React from "react";
// props={
//currentEmployees
// }
function Table(props) {
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th
              onClick={props.toggleChange}
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              scope="col"
            >
              Name
            </th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.currentEmployees.length > 0 ? (
            props.currentEmployees.map((employee) => {
              return (
                <tr>
                  <th scope="row">
                    <img src={employee.picture.thumbnail} alt="headshot" />
                  </th>
                  <td>
                    {employee.name.first} {employee.name.last}
                  </td>
                  <td>{employee.location.city}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
export default Table;
