const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submissions
app.post('/search', (req, res) => {
    const query = req.body.query;
    // Process the query as needed
    console.log('Received search query:', query);

    // Send a response (you can customize this)
    res.send('Search query received: ' + query);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
