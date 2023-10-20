const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const flightSchema = new Schema ({
    airline: {type: String, enum: ['American', 'JetBlue', 'Delta', 'United']},
    airport:{type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO', 'DCA', 'CHS'], default: 'SFO'},
    flightNo: {type: Number, min: 10, max: 9999}
    departs: {type: Date, default: function (){
        let date = new Date();
        return date.setFullYear(date.getFullYear() + 1);
        // https://bobbyhadz.com/blog/javascript-date-add-years
    }}
})