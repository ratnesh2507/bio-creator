const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'images' directory (for images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Parse URL-encoded bodies for form submission handling
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
    console.log(req.body); // Check if you're receiving the form data correctly

    const userData = {
        username: req.body.username,
        email: req.body.email,
        phno: req.body.phno,
        location: req.body.location
    };

    res.render('home.ejs', { userData });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
