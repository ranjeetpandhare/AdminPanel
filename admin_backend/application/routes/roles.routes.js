const express = require('express')
const router = express.Router()
const rolesController = require('../controller/roles.controller');

// Create a new employee
router.post('/', rolesController.create);
// Delete a employee with id
router.delete('/:id', rolesController.delete);
// Retrieve all employees
router.get('/', rolesController.findAll);

module.exports = router