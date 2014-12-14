var request = require('request');
var models = require('./models');
var Movie = models.Movie;

function infinite() {
    
    request('https://api.douban.com/v2/movie/subject/1764796', function(err, res, body) {
        
        if (err || res.statusCode !== 200) {
            console.log(err);
            console.log(res.statusCode);
        } else {
            var data = JSON.parse(body);
            var movie = new Movie(data);
            movie.save(function(err, movie) {
                if (err) {
                    console.error(err);
                }
                console.dir(movie);
            });
        }
    });
}

infinite();
