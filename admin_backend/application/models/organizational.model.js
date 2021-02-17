'use strict';
var dbConn = require('../config/db.config');
//Employee object create
var Organizational = function (organizational) {
    this.org_name = organizational.org_name;
    this.size_of_organization_unit = organizational.size_of_organization_unit;
    this.description = organizational.description;
};
// Add User 
Organizational.create = function (newOrganizational, result) {
    dbConn.query("INSERT INTO organizational set ?", newOrganizational, function (err, res) {
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
Organizational.delete = function (id, result) {
    dbConn.query("DELETE FROM organizational WHERE id = ?", [id], function (err, res) {
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
Organizational.findAll = function (result) {
    dbConn.query("Select * from organizational", function (err, res) {
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
module.exports = Organizational;