var models = require('../models');
var Movie = models.Movie;

exports.getMovieById = function(id, callback) {
    Movie.findOne({'id': id}, callback);
};


exports.getMovies = function (query, callback) {
    Movie.find(query, callback);
};


exports.getMovieByTag = function (tag,  callback) {
    Movie.find({'genres': {'$in': [tag]}}, callback)
};


