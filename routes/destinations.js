const express = require('express');
const  router = express.Router();

// Require the destinations controller (where the route goes)
const destinationsCtrl = require('../controllers/destinations');

// Route to add a destination
// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;