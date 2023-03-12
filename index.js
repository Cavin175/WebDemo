const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up middleware to parse form data
index.use(bodyParser.urlencoded({ extended: false }));

// Handle form submissions
index.post('/success', (req, res) => {
  // Get the form data from the request object
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Do something with the form data (e.g. send an email)

  // Send a successful response back to the user
  res.status(200).send('Message sent successfully!');
});

// Start the server
index.listen(3000, () => {
  console.log('Server listening on port 3000');
});
