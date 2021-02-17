'use strict';
const Organizational = require('../models/organizational.model');

exports.create = function (req, res) {
    const new_organizational = new Organizational(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Organizational.create(new_organizational, function (err, organizational) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "organizational added successfully!", data: organizational });
        });
    }
};
exports.delete = function (req, res) {
    Organizational.delete(req.params.id, function (err, organizational) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'organizational successfully deleted' });
    });
};
exports.findAll = function (req, res) {
    Organizational.findAll(function (err, organizational) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', organizational);
        res.send(organizational);
    });
};