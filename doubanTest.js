var request = require('request');
var Movie = require('./proxy').Movie;



var listApi = 'http://movie.douban.com/j/search_subjects?type=movie&tag=%E7%BB%8F%E5%85%B8&sort=recommend&page_limit=20&page_start=20';

var detailApi = 'http://api.douban.com/v2/movie/subject/';

var torrentApi = 'https://yts.re/api/list.json?keywords=';

function infinite() {

    
    request(listApi, function (err, res, body) {
        if (err || res.statusCode !== 200) {
            console.log(err);
            console.log(res.statusCode);
        } else {
            var movies = JSON.parse(body).subjects;
            movies.forEach(function (item, index) {

                // 判断电影是否存在
                Movie.getMovieById(item.id, function (err, movie) {

                    if (movie === null) {
                        request(detailApi + item.id, function (err, res, body) {
                            if (err || res.statusCode !== 200) {
                                console.log(err);
                                console.log(res.statusCode);
                            } else {

                                var detail = JSON.parse(body);

                                // 抓取种子
                                request(torrentApi + detail.original_title, function (err, res, body) {
                                    var torrents = JSON.parse(body);
                                        if (torrents.MovieList !== undefined) {

                                            detail.torrents = [];
                                            torrents.MovieList.forEach(function (item, list) {
                                                var obj = {};
                                                    obj.size = item.Size;
                                                    obj.size_byte = item.SizeByte;
                                                    obj.torrent_url = item.TorrentUrl;
                                                    obj.quality = item.Quality;
                                                    obj.torrent_matnet_url = item.TorrentMagnetUrl;

                                                    detail.torrents.push(obj);
                                            });

                                            Movie.newAndSave(detail, function (err, movie) {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    console.log('success')
                                                }
                                            });
                                        }
                                });

                            }
                        });
                    } else {

                        // 打印已存在的电影
                        console.log(movie.title + 'already exists');
                    }

                });

            });
        }
    });
}

infinite();
