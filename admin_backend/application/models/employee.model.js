'use strict';
var dbConn = require('../config/db.config');
//Employee object create
var Employee = function (employee) {
    this.name = employee.name;
    this.email = employee.email;
    this.role = employee.role;
    this.organization = employee.organization;
};
// Add User 
Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employee set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
// Delete User
Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM employee WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
//	  List All users
Employee.findAll = function (result) {
    dbConn.query("Select * from employee", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
module.exports = Employee;