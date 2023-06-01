const express = require('express');
const app = express();
const cors = require('cors')


// Middleware to parse JSON data
app.use(express.json());
app.use(cors());
// Route handler for the POST request
app.post('/endpoint', (req, res) => {
  const data = req.body;
  // Process the data as needed
  console.log(data);
  res.send(data);
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port4000.');
});