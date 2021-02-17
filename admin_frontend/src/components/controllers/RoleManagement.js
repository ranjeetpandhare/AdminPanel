import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import MyNavbar from '../layout/MyNavbar'

function RoleManagement() {
    const [role, setRole] = useState([]);

    useEffect(() => {
        loadRole();
    }, []);
    // to get all data from the database 
    const loadRole = async () => {
        const result = await axios.get("http://localhost:5000/api/v1/roles");
        setRole(result.data.reverse());
    };
    // to delete the perticular data using id 
    const deleteRole = async id => {
        await axios.delete(`http://localhost:5000/api/v1/roles/${id}`);
        loadRole();
    };
    return (
        <>
            <MyNavbar />
            <div className="container" style={{ height: "600px" }} >
                <div className="py-4"><h1 className="w-75 mx-auto shadow p-10" >Role Management </h1>
                    <Link className="btn btn-outline-dark" to="/NewRole/Add" class="btn btn-primary mr-10" style={{ color: "white", borderRadius: "20px" }}><h3>Add New Role</h3></Link><br /><br />
                    <table class="table border shadow" style={{ backgroundColor: "lightblue" }}>
                        <thead class="thead-dark">
                            {/* tabale heading names */}
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description </th>
                                <th scope="col">Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {role.map((roledata, index) => (
                                <tr>
                                    {/* to display Add new record  data on table */}
                                    <th scope="row">{index + 1}</th>
                                    <td>{roledata.name}</td>
                                    <td>{roledata.description}</td>

                                    <td>
                                        <Link
                                            class="btn btn-outline-danger"
                                            onClick={() => {
                                                if (window.confirm('Are you sure want to delete this record..?')) {
                                                    deleteRole(roledata.id)
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

export default RoleManagement
