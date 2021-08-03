
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

function newFlight(req, res) {
    res.render('flights/new', {
        title: "New Flight"
    })
}

function create(req, res) {
    // console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) {
            console.log(err);
            console.log(flight);
            return newFlight(res, req);
        }

        newFlight(req, res);
        // res.render('flights/new', {
        //     title: "New Flight"
        // });
    })



    // res.redirect("/flights");
}



/* Exports */
module.exports = {
    index,
    new: newFlight,
    create,
}
