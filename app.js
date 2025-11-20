const express = require('express');
const app = express();
const process = require('process'); // Explicit require is safer
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello from Docker CI/CD Demo!",
        timestamp: new Date().toISOString(), // FIXED: Space added
        version: '1.0.0'
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        uptime: process.uptime()
    });
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`); // Fixed template literal quotes
});

module.exports = app; // FIXED: module.exports