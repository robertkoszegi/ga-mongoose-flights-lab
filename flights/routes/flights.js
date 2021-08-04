var express = require('express');
var router = express.Router();
const flightCtrl = require("../controllers/flights");
const destinationCtrl = require('./destinations');

/* GET Routes */
router.get('/', flightCtrl.index); // all flights
router.get('/new', flightCtrl.new); 
router.get('/:id', flightCtrl.show);


/* POST Routes */
router.post('/', flightCtrl.create);




/* Exports */
module.exports = router;
