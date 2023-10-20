const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema {
    airport: {type: String, enum: ['AUS', 'DEN', 'LAX', 'SFO', 'DCA', 'CHS']},
    arrival: Date
}

const flightSchema = new Schema ({
    airline: {type: String, enum: ['American', 'JetBlue', 'Delta', 'United']},
    airport:{type: String, enum: ['AUS', 'DEN', 'LAX', 'SFO', 'DCA', 'CHS'], default: 'SFO'},
    flightNo: {type: Number, min: 10, max: 9999, required: true},
    departs: {type: Date, default: function (){
        let date = new Date();
        return date.setFullYear(date.getFullYear() + 1);
        // https://bobbyhadz.com/blog/javascript-date-add-years
    }},
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);