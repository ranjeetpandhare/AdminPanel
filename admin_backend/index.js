const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World");
});
// Require  routes
const employeeRoutes = require('./application/routes/employee.routes')
const rolesRoutes = require('./application/routes/roles.routes')
const organizationalRoutes = require('./application/routes/organizational.routes')


// using as middleware
app.use('/api/v1/employee', employeeRoutes)
app.use('/api/v1/roles', rolesRoutes)
app.use('/api/v1/organizational', organizationalRoutes)
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
