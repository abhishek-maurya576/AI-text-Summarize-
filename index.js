const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize.js');

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint

app.post('/summarize', (req, res) => {

   // TODO: handle POST /summarize request


});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
