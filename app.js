const express = require('express');
const path = require('path');
const app = express();

// Set up a static directory to serve files from the main directory
app.use(express.static(path.join(__dirname, '')));

// Define a route to render signup.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
