var Movie = require('../proxy').Movie;

exports.index = function(req, res, next) {
    
    var id = req.params.id;

    console.log(1)

    Movie.getMovieById(id, function(err, detail) {
        if (err) {
            return next(err); 
        } 


        console.log(detail)

        if (!detail) {
            res.send('电影还未收录或来自未来');
            return;
        }

        res.render('detail', {
            detail: detail
        });

    });
};
