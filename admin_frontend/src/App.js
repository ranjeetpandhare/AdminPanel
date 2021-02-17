import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewEmployee from "./components/Add_new _data/AddNewEmployee";
import AddNewRole from "./components/Add_new _data/AddNewRole";
import AddNewOrganiation from "./components/Add_new _data/AddNewOrganiation";
import EmployeeManagement from "./components/controllers/EmployeeManagement";
import RoleManagement from "./components/controllers/RoleManagement";
import OrganiationManagement from "./components/controllers/OrganiationManagement";
import Admin from "./components/controllers/Admin";
import NotFound from "./components/controllers/NotFound";
function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/EmployeeManagement" component={EmployeeManagement} />
          <Route exact path="/RoleManagement" component={RoleManagement} />
          <Route exact path="/OrganiationManagement" component={OrganiationManagement} />
          <Route exact path="/NewEmployee/Add" component={AddNewEmployee} />
          <Route exact path="/NewRole/Add" component={AddNewRole} />
          <Route exact path="/NewOrganiation/Add" component={AddNewOrganiation} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
