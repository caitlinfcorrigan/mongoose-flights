const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

async function index(req, res) {
    const flights = await Flight.find({});
    // This passes the view to render and the necessary data
    // Pass the list of all variables as an object, even if it's just one
    res.render('flights/index', { flights });
}

// Promise to update the db with the new flight data
async function create(req, res) {
    // No trims or other data cleansing functions bc of form styling & db req
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
        // Redirect after CRUDing data
        res.redirect('/flights');
    } catch (err) {
        // Typically a validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message});
    }
}

function newFlight(req, res) {
    res.render('./flights/new', {errorMsg: ''});
}