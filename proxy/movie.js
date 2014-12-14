var models = require('../models');
var Movie = models.Movie;


exports.getMovieById = function(id, callback) {
    Movie.findOne({'id': id}, callback);
};
