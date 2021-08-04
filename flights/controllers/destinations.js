const Flight = require('../models/flight');
 
function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.reviews.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

 module.exports = {
   create
 };