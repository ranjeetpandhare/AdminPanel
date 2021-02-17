const express = require('express')
const router = express.Router()
const employeeController = require('../controller/employee.controller');

// Create a new employee
router.post('/', employeeController.create);
// Delete a employee with id
router.delete('/:id', employeeController.delete);
// Retrieve all employees
router.get('/', employeeController.findAll);

module.exports = router