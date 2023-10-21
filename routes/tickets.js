const express = require('express');
const router = express.Router();

// Add controller for tickets
const ticketsCtrl = require('../controllers/tickets');

// Route to new ticket page
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// Route to submit new ticket
// POST /flights/:id/tickets/new
router.post('/flights/:id/', ticketsCtrl.create);

module.exports = router;