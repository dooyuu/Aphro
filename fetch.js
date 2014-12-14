var Movie = require('./proxy').Movie;
var request = require('request');


var searchAPI  = 'http://movie.douban.com/j/search_subjects?type=movie&tag=%E7%BB%8F%E5%85%B8&sort=recommend&page_limit=20&page_start=0';

var detailAPI = 'http://api.douban.com/v2/movie/subject/'; 

request(searchAPI, function (error, response, body) {

    if (error) {
        console.log(error);
    }

    var movies = JSON.parse(body)['subjects'];

    movies.forEach(function (item, index) {
        request(detailAPI + item.id, function (error, response, body) {

            if (error) {
                console.log(error);
            }
        

            var data = JSON.parse(body);
            

            Movie.getMovieByTitle(data.title, function (err, movie) {
                if (!movie) {
                    Movie.newAndSave(data, function () {
                        console.log('success');
                    });
                }
            })

        });
    });



})

