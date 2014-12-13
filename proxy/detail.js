var models = require('../models');
var Detail = models.Detail;


exports.getMovieById = function(id, callback) {
    Detail.findOne({'id': id}, callback);
};
