const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files from the public directory
app.use(express.static('public'));

// Handle file upload
app.post('/upload', upload.single('testFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File was received successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
