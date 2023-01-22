const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('./Develop/Routes/api_routes')(app);
require('./Develop/Routes/html_routes')(app);

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));





app.listen(PORT, () => {
    console.log(`server now on port ${PORT}!`);
    });



