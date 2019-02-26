const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const SeatSchema = new Schema({
    seat: {
        type: String
    },
    row: {
        type: Number
    },
    class: {
        type: String
    },
    occupied: {
        type: Boolean
    }
});

module.exports = Seat = mongoose.model('seat', SeatSchema);