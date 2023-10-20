var express = require('express');
var router = express.Router();

// Add the controller for flights
const flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

// POST /flights
router.post('/', flightsCtrl.create);


module.exports = router;
