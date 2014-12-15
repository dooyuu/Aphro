var Movie = require('../proxy').Movie;

exports.index= function(req, res, next) {
    
    var id = req.params.id;
    Movie.getMovieById(id, function(err, movie) {
        if (err) {
            return next(err); 
        } 

        if (!movie) {
            res.send('电影还未收录或来自未来');
            return;
        }

        res.render('movie', {
            movie: movie
        });
    });
};
