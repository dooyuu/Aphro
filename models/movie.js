var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// 参见豆瓣 API V2 http://developers.douban.com/wiki/?title=movie_v2#subject
var MovieSchema = new Schema({

    id: {type: String},
    title: {type: String},
    original_title: {type: String},
    aka: {type: Array},
    rating: {type: Object},
    rating_count: {type: Number},
    images: {type: Object},
        
    // 条目分类, movie 或 tv
    subtype: {type: String},
    directors: {type: Array},
    casts: {type: Array},
    year: {type: String},
    languages: {type: Array},

    // 时长
    durations: {type: Array},

    // 影片类型
    genres: {type: Array},
    summary: {type: String},
    seasons_count: {type: Number},
    current_season: {type: Number},
    episodes_counts: {type: Number},

    // 种子链接
    torrents: {type: Array}
    
});


mongoose.model('Movie', MovieSchema);
