'use strict';
var dbConn = require('../config/db.config');
//Employee object create
var Roles = function (roles) {
    this.name = roles.name;
    this.description = roles.description;
};
// Add User 
Roles.create = function (newRole, result) {
    dbConn.query("INSERT INTO roles set ?", newRole, function (err, res) {
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
Roles.delete = function (id, result) {
    dbConn.query("DELETE FROM roles WHERE id = ?", [id], function (err, res) {
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
Roles.findAll = function (result) {
    dbConn.query("Select * from roles", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('roles : ', res);
            result(null, res);
        }
    });
};
module.exports = Roles;