
// require mongoose module
const mongoose = require('mongoose');

// connect to a particular db
mongoose.connect('mongodb://localhost/flights', {
    // options: standard set
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
});

// get connection feedback on console
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})