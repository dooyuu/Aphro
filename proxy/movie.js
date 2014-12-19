var models = require('../models');
var Movie = models.Movie;


exports.getMovies = function(arg, callback) {
    Movie.find(arg, callback);
};

exports.getMovieById = function(id, callback) {
    Movie.findOne({'id': id}, callback);
};

exports.newAndSave = function (data, callback) {
    var movie = new Movie(data);
        movie.save(callback);
       
}