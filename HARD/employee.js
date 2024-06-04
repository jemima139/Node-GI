const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Defines the path to the employees.json file
const employeesFilePath = path.join(__dirname, 'employees.json');
let employees = [];

// Loads the employee data from the JSON file
fs.readFile(employeesFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    employees = JSON.parse(data).employees;
});

// Endpoint to get all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// Endpoint to get a specific employee by ID
app.get('/employees/:employeeID', (req, res) => {
    const employeeID = req.params.employeeID;
    const employee = employees.find(emp => emp.employeeID === employeeID);
    
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});