// Import packages
const express = require('express');
const router = express.Router();

// Import routes
const home = require('./renders/home');
const notFound = require('./renders/notFound');

// Routes
router.get('/', home);
router.get('/*', notFound);

module.exports = router;
