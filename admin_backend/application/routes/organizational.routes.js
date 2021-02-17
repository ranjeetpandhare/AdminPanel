const express = require('express')
const router = express.Router()
const organizationalController = require('../controller/organizational.controller');

// Create a new employee
router.post('/', organizationalController.create);
// Delete a employee with id
router.delete('/:id', organizationalController.delete);
// Retrieve all employees
router.get('/', organizationalController.findAll);

module.exports = router