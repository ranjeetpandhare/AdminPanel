import Axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input } from 'reactstrap';

//add new restaurants data 
const AddNewRole = () => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, " ", description, " ");

        Axios.post(`http://localhost:5000/api/v1/roles`, { name: name, description: description })
            .then(res => {
                console.log(res.data);
                // data will added successfully then redirect from AdminManageRestaurant page 
                history.push("/RoleManagement");
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div className="roleNewAdd" >
            <div className="w-50 mx-auto shadow p-1 mb-5" >
                <h2 className="text-center mb-4" style={{ color: "#06a1bf" }}>Add New Role</h2>
                <form onSubmit={e => onSubmit(e)}>

                    {/* RestaurtantName */}
                    <FormGroup>
                        <Label for="exampleEmail" sm={10} size="lg">Name </Label>
                        <Input
                            type='text' name="name"
                            value={name}
                            onChange={e => { setName(e.target.value) }} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" sm={10} size="lg">Description </Label>
                        <Input
                            type='text' name="description"
                            value={description}
                            onChange={e => { setDescription(e.target.value) }} />
                    </FormGroup>

                    <button type="submit" className="btn btn-primary btn-block">Add New Employee</button><br />
                    <Link to={'/RoleManagement'}><button type="submit" className="btn btn-danger btn-block">Cancel</button></Link>
                </form>
            </div>
        </div>
    );
};

export default AddNewRole;