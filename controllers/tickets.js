const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create

}

// Refactor to update tickets
async function create(req, res) {
    // Get the flight id from the req to add to the ticket
    let flight = req.params.id;
    // Add the flight to the ticket (the req's body containing the form data)
    req.body.flight = flight;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        // Submit the req.body as a doc in the db
        await Ticket.create(req.body);
        // Redirect after CRUDing data
        res.redirect(`/flights/${flight}`);
    } catch (err) {
        // Typically a validation error
        console.log(err);
        res.render('flights/:id/tickets/new', { errorMsg: err.message});
    }
}

function newTicket(req, res) {
    res.render('./tickets/new', {flight : req.params.id, errorMsg: ''});
}