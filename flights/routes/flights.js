var express = require('express');
var router = express.Router();
const flightCtrl = require("../controllers/flights");

/* GET Routes */
router.get('/', flightCtrl.index); // all flights
router.get('/new', flightCtrl.new); 



/* POST Routes */
router.post('/', flightCtrl.create);




/* Exports */
module.exports = router;
