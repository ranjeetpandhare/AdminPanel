import Axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input } from 'reactstrap';

//add new restaurants data 
const AddNewOrganiation = () => {
    let history = useHistory();
    const [org_name, setOrg_name] = useState('');
    const [size_of_organization_unit, setSize_of_organization_unit] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(org_name, " ", size_of_organization_unit, " ", description, " ");

        Axios.post(`http://localhost:5000/api/v1/organizational`, { org_name: org_name, size_of_organization_unit: size_of_organization_unit, description: description })
            .then(res => {
                console.log(res.data);
                // data will added successfully then redirect from AdminManageRestaurant page 
                history.push("/OrganiationManagement");
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div className="orgNewAdd" >
            <div className="w-50 mx-auto shadow p-1 mb-5" >
                <h2 className="text-center mb-4" style={{ color: "#06a1bf" }}>Add New Organiation</h2>
                <form onSubmit={e => onSubmit(e)}>

                    {/* RestaurtantName */}
                    <FormGroup>
                        <Label for="exampleEmail" sm={10} size="lg">Name </Label>
                        <Input
                            type='text' name="org_name"
                            value={org_name}
                            onChange={e => { setOrg_name(e.target.value) }} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" sm={10} size="lg">Size of Organization </Label>
                        <Input
                            type='text' name="size_of_organization_unit"
                            value={size_of_organization_unit}
                            onChange={e => { setSize_of_organization_unit(e.target.value) }} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" sm={10} size="lg">Description </Label>
                        <Input
                            type='text' name="description"
                            value={description}
                            onChange={e => { setDescription(e.target.value) }} />
                    </FormGroup>
                    <button type="submit" className="btn btn-primary btn-block">Add New Organiation</button><br />
                    <Link to={'/OrganiationManagement'}><button type="submit" className="btn btn-danger btn-block">Cancel</button></Link>
                </form>
            </div>
        </div>
    );
};

export default AddNewOrganiation;