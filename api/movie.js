var Movie = require('../proxy').Movie;
var config = require('../config');

exports.index = function (req, res, next) {

    var query = {};
    var opt = {
        limit: config.pre_page
    };

    if (keyword = req.query.keyword) {
        query.title = new RegExp('.' + keyword + '.');
    }

    if (genre = req.query.genre) {
        query.genres = {$in: [genre]};
    }

    if (page = req.query.page) {
        opt.skip = config.pre_page * page;
    }



    Movie.getMovies(query, opt,function (err, movies) {
        if (err) {
            next(err);
        }
        res.send(movies)
    });
};


