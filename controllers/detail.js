var Detail = require('../proxy').Detail;

exports.index = function(req, res, next) {
    
    var id = req.params.id;
    Detail.getMovieById(id, function(err, detail) {
        if (err) {
            return next(err); 
        } 

        if (!detail) {
            res.send('电影还未收录或来自未来');
            return;
        }

        res.render('/:id', {
            detail: detail
        });
    });
};
