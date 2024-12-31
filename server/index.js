const express = require('express');
const fs = require('fs'); // File System module to read files
const app = express();

const port = 3000;

// Route that serves the JSON data from the user.json file
app.get('/user', (req, res) => {
  // Read the user.json file asynchronously
  fs.readFile('user.json', (err, data) => {
   
      // Parse the JSON data and send it as the response
      const jsonData = JSON.parse(data);
      res.json(jsonData);
      }
);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
