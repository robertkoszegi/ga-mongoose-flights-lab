// Require mongoose
const mongoose = require('mongoose')

// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

/* !!! Schema order seems to matter !!! */


/* DESTINATIONS SCHEMA */
const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,

},
{
    timestamps:true
});

/* FLIGHT SCHEMA */
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
        return new Date(oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1))
        }
    },
    destinations:[destinationSchema],

}, {
    timestamps: true
});




module.exports = mongoose.model('Flight', flightSchema)