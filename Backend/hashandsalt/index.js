const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(express.json());
const users = [];

app.post('/register', async (req, res) => {
  const { userId, password } = req.body;

  const existingUser = users.find(user => user.userId === userId);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists Bro !' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    users.push({ userId, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully !' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user : (' });
  }
});

app.post('/login', async (req, res) => {
  const { userId, password } = req.body;
  const user = users.find(u => u.userId === userId);

  if (!user) {
    return res.status(400).json({ message: 'Invalid user ID or password : /' });
  }

  try {
    const match = await bcrypt.compare(password, user.password);
    
    if (match) {
      res.status(200).json({ message: 'Login successful !' });
    } else {
      res.status(400).json({ message: 'Invalid user ID or password : /' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in : (' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});