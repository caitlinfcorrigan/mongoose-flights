const Flights = require('../models/flight');

module.exports = {
    new: newFlight,
    // create,
    // index
}

function newFlight(req, res) {
    res.render('./flights/new', {errorMsg: ''});
}