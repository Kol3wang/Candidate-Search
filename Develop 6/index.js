const express = require('express');
const app = express();
require('dotenv').config();

// Use the PORT environment variable or default to 3000 for local development
const PORT = process.env.PORT || 3000;

// Set up middleware and routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});