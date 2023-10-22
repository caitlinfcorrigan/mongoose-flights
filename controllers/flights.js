const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}


// async function show (req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         Ticket.find({flight: flight._id}, function(err, tickets) {
//             res.render('flights/show', {title: "Flight Destinations", flight});
//         });
//     });   
// }

// Original
async function show(req, res) {
    const tickets = await Ticket.find({flight: req.params.id});
    const flight = await Flight.findById(req.params.id); 
    res.render('flights/show', {title: "Flight Destinations", flight, tickets});
 };

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