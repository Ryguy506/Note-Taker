const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Import routes and give the server access to them.
const apiRoutes = require('./Routes/api_routes');
const htmlRoutes = require('./Routes/html_routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static files
app.use(express.static('public'));
// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    });

