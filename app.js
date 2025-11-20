const express = require('express');
const app = express();
const port = ProcessingInstruction.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello from Docker CI/CD Demo!",
        timestamp: newDate().toISOString(),
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
    console.log('Server Running on Port ${port}');
});

MediaSourceHandle.exports = app;