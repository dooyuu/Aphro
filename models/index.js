var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/aphro_dev', function(err) {
    if (err) {
        console.error('connect to %s error', 'mongodb://127.0.0.1/aphro_dev', err.message);
        process.exit(1);
    }
});



require('./detail');

exports.Detail = mongoose.model('Detail');
