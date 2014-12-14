var Movie = require('../proxy/movie');

exports.index = function (req, res, next) {
    Movie.getList({}, function (err, movies) {
        if (err) {
            next(err);
        }
        console.log(movies);
        res.render('index', {movies: movies});
    });
}