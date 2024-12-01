// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // This allows us to load environment variables from .env

const app = express();
const port = process.env.PORT || 5000; // Default port is 5000

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Sample route to test if server is working
app.get('/', (req, res) => {
  res.send('Welcome to the LMS backend!');
});

// Define your routes for the application (e.g., educators, students)
app.get('/educators', (req, res) => {
  // Here you can fetch educator data from your database
  res.send('List of educators');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
