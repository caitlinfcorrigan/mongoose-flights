const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketsSchema = new Schema ({
    seat: { type: String, match: /[A-F][1-9]\d?/},
    price: { type: Number, min: 0},
    // Reference parent to avoid using an array (each ticket only has one flight)
    flight: { type: Schema.Types.ObjectId, ref: 'Flight' }
})

module.exports = mongoose.model('Ticket', ticketsSchema);