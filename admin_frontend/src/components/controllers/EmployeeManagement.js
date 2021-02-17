import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import MyNavbar from '../layout/MyNavbar'

function EmployeeManagement() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, []);
    // to get all data from the database 
    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:5000/api/v1/employee");
        setEmployee(result.data.reverse());
    };
    // to delete the perticular data using id 
    const deleteEmployee = async id => {
        await axios.delete(`http://localhost:5000/api/v1/employee/${id}`);
        loadEmployee();
    };
    return (
        <>
            <MyNavbar />
            <div className="container" style={{ height: "600px" }} >
                <div className="py-4"><h1 className="w-75 mx-auto shadow p-10" >Employee Management </h1>
                    <Link className="btn btn-outline-dark" to="/NewEmployee/Add" class="btn btn-primary mr-10" style={{ color: "white", borderRadius: "20px" }}><h3>Add New Employee</h3></Link><br /><br />
                    <table class="table border shadow" style={{ backgroundColor: "lightblue" }}>
                        <thead class="thead-dark">
                            {/* tabale heading names */}
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role </th>
                                <th scope="col">Organiation </th>
                                <th scope="col">Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.map((emp, index) => (
                                <tr>
                                    {/* to display Add new record  data on table */}
                                    <th scope="row">{index + 1}</th>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.role}</td>
                                    <td>{emp.organization}</td>
                                    <td>
                                        <Link
                                            class="btn btn-outline-danger"
                                            onClick={() => {
                                                if (window.confirm('Are you sure want to delete this record..?')) {
                                                    deleteEmployee(emp.id)
                                                }
                                            }}>
                                            Delete
                                   </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeManagement
