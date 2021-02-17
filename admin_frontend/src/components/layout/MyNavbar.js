import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const MyNavbar = () => {
  let history = useHistory();

  const logout = (props) => {
    window.confirm("Are you sure want to logout..");
    history.push("/")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/OrganiationManagement">
                <h3 style={{
                  width: "300px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "7px",
                }} class="btn btn-default mr-2" ><b>Organiation</b></h3>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/RoleManagement">
                <h3 style={{
                  width: "300px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "7px",
                }} class="btn btn-default mr-2" ><b>Role</b></h3>
              </NavLink>
            </li>


            <li className="nav-item">
              {/* home button in navbar */}
              <NavLink className="nav-link" to="/EmployeeManagement">
                <h3 style={{
                  width: "300px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "7px",
                }} class="btn btn-default mr-2" ><b>Employee</b></h3>
              </NavLink>
            </li>



            <li className="nav-item">
              <NavLink className="nav-link" exact to="">
                <h6 style={{
                  width: "100px",
                  height: "30px",
                  color: "black",
                  position: "absolute",
                  borderRadius: "10%",
                  right: "10px",
                  backgroundColor: "white",
                  marginTop: "10px",
                  textAlign: "center"
                }} class="" onClick={logout} ><b>Logout</b></h6>
              </NavLink>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
