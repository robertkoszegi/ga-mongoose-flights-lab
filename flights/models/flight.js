// Require mongoose
const mongoose = require('mongoose')

// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs:{
        type: Date,
        default: function() {
        oneYearFromNow = new Date();
        new Date(oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1))

        }
    }
})




module.exports = mongoose.model('Flight', flightSchema)