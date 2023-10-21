const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket

}

// async function create(req, res) {
//     // No trims or other data cleansing functions bc of form styling & db req
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key];
//     }
//     try {
//         await Flight.create(req.body);
//         // Redirect after CRUDing data
//         res.redirect('/flights');
//     } catch (err) {
//         // Typically a validation error
//         console.log(err);
//         res.render('flights/new', { errorMsg: err.message});
//     }
// }

function newTicket(req, res) {
    console.log("hit tickets controller")
    res.render('./tickets/new', {flight : req.params.id, errorMsg: ''});
}