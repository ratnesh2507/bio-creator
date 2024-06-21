const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) // Appends the file extension
    }
  });
  const upload = multer({ storage: storage });

// Set up a static directory to serve files from the main directory
app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route to render signup.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/register', (req,res) => {
    console.log(req.body);
    const userData = {
        username : req.body.username,
        email : req.body.email,
        phno : req.body.phno,
        location : req.body.location
    }
    const imagePath = req.body.file ? req.body.file.path : null;
    res.render("home.ejs", {userData, imagePath});
})

// Start the server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
