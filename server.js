const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const app = express();

// Mount the user routes on the '/api/v1' base path
app.use('/api/v1', userRoutes);