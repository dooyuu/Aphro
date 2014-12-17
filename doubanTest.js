var request = require('request');
var models = require('./models');
var Movie = models.Movie;

var listApi = 'http://movie.douban.com/j/search_subjects?type=movie&tag=%E7%BB%8F%E5%85%B8&sort=recommend&page_limit=20&page_start=0';

var detailApi = 'http://api.douban.com/v2/movie/subject/';

function infinite() {

    
    request(listApi, function (err, res, body) {
        if (err || res.statusCode !== 200) {
            console.log(err);
            console.log(res.statusCode);
        } else {
            var movies = JSON.parse(body).subjects;
            movies.forEach(function (item, index) {
                request(detailApi + item.id, function (err, res, body) {
                    if (err || res.statusCode !== 200) {
                        console.log(err);
                        console.log(res.statusCode);
                    } else {
                        var data = JSON.parse(body);
                        var movie = new Movie(data);
                            movie.save(function (err, movie) {
                                console.log(err);
                            });
                    }
                });
            });
        }
    });
}

infinite();
