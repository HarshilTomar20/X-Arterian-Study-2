const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { authenticateToken } = require('./auth');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const users = [];

// Register a new user
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });

    console.log(users);
    res.status(201).send('User registered');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(`Token generated: `, token, `for ${username}`);
    res.json({ token });
});

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});