
// Require model
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

let airlineEnums = Flight.schema.path('airline').enumValues;
let airportEnums = Flight.schema.path('airport').enumValues;


/* Index */
function index(req, res) {
    Flight.find((err, flights) => {
        if(err) return res.status(500).send(err);

        res.render("flights/index", {
            title: "Flight List",
            flights,
            
        })
    });

}


/* Details */
function show(req, res) {
    
    Flight.findById(req.params.id, function(err, flight) {

        Ticket.find({flight: flight._id}, function(err, tickets) {  
        
            res.render('flights/show', { 
                title: 'Flight Detail', 
                flight,
                tickets,
                airports: airportEnums,
            });
        });
    });
}
  

/* New Flight */
function newFlight(req, res) {

    res.render('flights/new', {
        airports: airportEnums,
        airlines: airlineEnums,
        title: "New Flight"
    })
}

/* Create flight */
function create(req, res) {

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
        index(req, res)
    })
}

/* New ticket page */
function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(req.params.id)
        res.render('flights/newTicket', {
            flight,
            title: "New Ticket"
        });
        console.log("req", req.body.id)
    });    
};

/* Create ticket */
function createTicket(req, res) {

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id
    ticket.save(function(err){
        if (err) {
            console.log(err);
            console.log(flight);
            return newTicket(res, req);
        }
        show(req,res)
    })
}

/* Exports */
module.exports = {
    index,
    new: newFlight,
    create,
    show,
    newTicket,
    createTicket,
}

