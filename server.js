const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware for parsing JSON bodies
app.use(express.json());

// ...existing code...

require('./database');

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// ...existing code...

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
