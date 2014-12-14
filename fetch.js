var Movie = require('./proxy').Movie;
var request = require('request');
var path = require('path');

var storeLocal = require('./common/store_local');

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

            if (data.id !== undefined) {
                Movie.getMovieByTitle(data.title, function (err, movie) {
                    if (!movie) {
                        var filename = new Date().getTime() + index + path.extname(data.images.large);

                        storeLocal.fetch(data.images.large, filename, function (err, url) {

                            data.image = url;

                            Movie.newAndSave(data, function() {
                                console.log('success'); 
                            })

                        })
                    } else {
                        console.log('movie exists')
                    }
                })
            } else {
                console.log('API 调用限制');
            }

        });
    });



})

