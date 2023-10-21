const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create

}

// Refactor to update tickets
async function create(req, res) {
    console.log(req);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        console.log(req.body)
        await Ticket.create(req.body);
        // Redirect after CRUDing data
        res.redirect('/flights/:id');
    } catch (err) {
        // Typically a validation error
        console.log(err);
        res.render('flights/:id/tickets/new', { errorMsg: err.message});
    }
}

function newTicket(req, res) {
    console.log("hit tickets controller")
    res.render('./tickets/new', {flight : req.params.id, errorMsg: ''});
}