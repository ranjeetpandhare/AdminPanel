import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import MyNavbar from '../layout/MyNavbar'

function OrganiationManagement() {

    //set local Organiation data 
    const [organiation, setOrganiation] = useState([]);

    //automatically load the data 
    useEffect(() => {
        loadOrganiation();
    }, []);
    // to get all Organiation data from the database 
    const loadOrganiation = async () => {
        const result = await axios.get("http://localhost:5000/api/v1/organizational");
        setOrganiation(result.data.reverse());
    };
    // to delete the perticular Organiation data using id 
    const deleteOrganiation = async id => {
        await axios.delete(`http://localhost:5000/api/v1/organizational/${id}`);
        loadOrganiation();
    };
    return (
        <>
            <MyNavbar />
            <div className="container" style={{ height: "600px" }} >
                <div className="py-4"><h1 className="w-75 mx-auto shadow p-10" >Organiation Management </h1>
                    <Link className="btn btn-outline-dark" to="/NewOrganiation/Add" class="btn btn-primary mr-10" style={{ color: "white", borderRadius: "20px" }}><h3>Add New Organiation</h3></Link><br /><br />
                    <table class="table border shadow" style={{ backgroundColor: "lightblue" }}>
                        <thead class="thead-dark">
                            {/* tabale heading names */}
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Size of Organization </th>
                                <th scope="col">LDescription </th>
                                <th scope="col">Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {organiation.map((org, index) => (
                                <tr>
                                    {/* to display Add new record  data on table */}
                                    <th scope="row">{index + 1}</th>
                                    <td>{org.org_name}</td>
                                    <td>{org.size_of_organization_unit}</td>
                                    <td>{org.description}</td>
                                    <td>
                                        <Link
                                            class="btn btn-outline-danger"
                                            onClick={() => {
                                                if (window.confirm('Are you sure want to delete this record..?')) {
                                                    deleteOrganiation(org.id)
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

export default OrganiationManagement
