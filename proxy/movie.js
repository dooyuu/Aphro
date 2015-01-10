var models = require('../models');
var Movie = models.Movie;


exports.getMovies = function(arg, opt, callback) {

    if (typeof(opt) === 'function') {
        callback = opt;
        opt = {};
    }

    Movie.find(arg, '', opt, callback);
};




exports.getMovieById = function(id, callback) {
    Movie.findOne({'id': id}, callback);
};



exports.newAndSave = function (data, callback) {
    var movie = new Movie(data);
        movie.save(callback);
};