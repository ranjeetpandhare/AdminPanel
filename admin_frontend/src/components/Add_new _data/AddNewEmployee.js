import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input } from 'reactstrap';

//add new restaurants data 
const AddNewEmployee = () => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [organization, setOrganization] = useState('');
    const [roleList, setRoleList] = useState([]);
    const [OrganiationList, setOrganisationList] = useState([]);

    useEffect(() => {
        loadRole();
        loadOrganisation();
    }, []);

    const loadRole = async () => {
        const result = await axios.get("http://localhost:5000/api/v1/roles");
        setRoleList(result.data.reverse());
    }

    const loadOrganisation = async () => {
        const result = await axios.get("http://localhost:5000/api/v1/organizational");
        setOrganisationList(result.data.reverse());
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, " ", email, " ", role, " ", organization, " ");

        axios.post(`http://localhost:5000/api/v1/employee`, { name: name, email: email, role: role, organization: organization })
            .then(res => {
                console.log(res.data);
                // data will added successfully then redirect from EmployeeManage page 
                history.push("/EmployeeManagement");
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div className="employeeAddNew" >
            <div className="w-50 mx-auto shadow p-1 mb-5" >
                <h2 className="text-center mb-4" style={{ color: "#06a1bf" }}>Add New Employee</h2>
                <form onSubmit={e => onSubmit(e)}>

                    <FormGroup>
                        <Label for="exampleEmail" sm={10} size="lg">Name </Label>
                        <Input
                            type='text' name="name"
                            value={name}
                            onChange={e => { setName(e.target.value) }} />
                    </FormGroup>

                    <FormGroup>
                        <Label sm={10} size="lg">Email</Label>
                        <Input type="text" name="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value) }} />
                    </FormGroup>

                    <FormGroup>
                        <Label sm={10} size="lg">Role</Label>
                        <Input type="select" name="role" onChange={e => { setRole(e.target.value) }}>
                            <option>Select</option>
                            {roleList.map((rol) => <option value={rol.name}>{rol.name}</option>)}
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label sm={10} size="lg">Organisation</Label>
                        <Input type="select" name="organization" onChange={e => { setOrganization(e.target.value) }}>
                            <option>Select</option>
                            {OrganiationList.map((org) => <option value={org.org_name}>{org.org_name}</option>)}
                        </Input>
                    </FormGroup>
                    <button type="submit" className="btn btn-primary btn-block">Add New Employee</button><br />
                    <Link to={'/EmployeeManagement'}><button type="submit" className="btn btn-danger btn-block">Cancel</button></Link>
                </form>
            </div>
        </div>
    );
};

export default AddNewEmployee;