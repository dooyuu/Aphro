var Movie = require('../proxy/movie');

exports.index = function (req, res, next) {
    Movie.getMovies({}, function (err, movies) {
        if (err) {
            next(err);
        }
        res.render('index', {movies: movies});
    });
};

exports.movie = function (req, res, next) {
    var id = req.params.id;
    Movie.getMovieById(id, function (err, movie) {
        res.render('movie', {movie: movie});
    })
};


exports.tag = function (req, res, next) {
    var tag = req.params.tag;
    console.log(tag);
    Movie.getMovieByTag(tag, function (err, movies) {
        if (err) {
            next(err);
        }
        res.render('index', {movies: movies});
    });
}