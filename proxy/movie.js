var models = require('../models');
var Movie = models.Movie;



exports.getMovieById = function (id, callback) {
    Movie.findOne({_id: id}, callback);
};


exports.getMovieByTitle = function (title, callback) {
    Movie.findOne({'title': title}, callback);
}


exports.getList = function (query, callback) {
    Movie.find(query, callback);
}

exports.newAndSave = function (data, callback) {
    var movie = new Movie();


        movie.title = data.title;
        movie.original_title = data.original_title;
        movie.rating = data.rating;
        movie.rating_count = data.rating_count;
        movie.image = data.image;

        movie.subtype = data.subtype;
        movie.directors = data.directors;
        movie.casts = data.casts;
        movie.year = data.year;
        movie.languages = data.languages;

        movie.durations = data.durations;

        movie.genres = data.genres;
        movie.summary = data.summary;
        movie.seasons_count = data.seasons_count;
        movie.current_season = data.current_season;
        movie.episodes_counts = data.episodes_counts;

        movie.save(callback);

}

