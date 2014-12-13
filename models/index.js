var config = require('../config');
var mongoose = require('mongoose');


mongoose.connect(config.db, function(err) {
    if (err) {
        console.error('connect to %s error', config.db, err.message);
        process.exit(1);
    }
});



require('./detail');

exports.Detail = mongoose.model('Detail');
