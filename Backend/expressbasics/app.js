const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Pass control to the next middleware
});

// Define routes
app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'GET request received' });
});

app.post('/api/data/post', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: 'POST request received', data: data });
});

app.put('/api/data/put', (req, res) => {
    const data = req.body;
    res.status(200).json({ message: 'PUT request received', data: data });
});

app.delete('/api/data/delete', (req, res) => {
    res.status(200).json({ message: 'DELETE request received' });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});