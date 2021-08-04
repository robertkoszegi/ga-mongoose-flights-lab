
// Require model
const Flight = require('../models/flight');



function index(req, res) {
    Flight.find((err, flights) => {
        if(err) return res.status(500).send(err);

        // return res.status(200).send(flights);
        // return console.log(flights);
        res.render("flights/index", {
            title: "Flight List",
            flights,
            
        })
    });

}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { 
            title: 'Flight Detail', 
            flight
        });
    });
}
  


// //This will return the enum array
// let mpaaEnums = Movie.schema.path('mpaaRating').enumValues

// //this would let us access the enums array in the new.ejs file under selectionOptions. 
// res.render("movies/new", {selectionOptions: mpaaEnums})

function newFlight(req, res) {
    //This will return the enum array
    let airlineEnums = Flight.schema.path('airline').enumValues;
    let airportEnums = Flight.schema.path('airport').enumValues;
    console.log(Flight.schema.path('airline').enumValues)
    res.render('flights/new', {
        airports: airportEnums,
        airlines: airlineEnums,
        title: "New Flight"
    })
}

function create(req, res) {
    // console.log(req.body);
    // remove empty '' properties to allow defaults to be set
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) {
            console.log(err);
            console.log(flight);
            return newFlight(res, req);
        }

        newFlight(req, res);
    })
}



/* Exports */
module.exports = {
    index,
    new: newFlight,
    create,
    show,
}
