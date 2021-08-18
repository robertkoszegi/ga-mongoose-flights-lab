var express = require('express');
var router = express.Router();
const flightCtrl = require("../controllers/flights");
// const ticketsCtrl = require('../controllers/tickets')
// const destinationCtrl = require('./destinations');

/* GET Routes */
router.get('/', flightCtrl.index); // all flights
router.get('/new', flightCtrl.new); 
// New ticket page
router.get('/:id/newTicket', flightCtrl.newTicket);
router.get('/:id', flightCtrl.show);


/* POST Routes */
router.post('/', flightCtrl.create);

//New ticket create
router.post('/:id/newTicket', flightCtrl.createTicket); 





/* Exports */
module.exports = router;
