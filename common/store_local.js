var config = require('../config');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var utility = require('utility');

var request = require('request');

exports.fetch = function (url, filename, callback) {
   

    var date = new Date();

    var uploadPath = config.upload.path


    var date = date.getFullYear() + '/' + (date.getMonth() +1) + '/' + date.getDate() + '/';

    var fileUrl = config.upload.url + date + filename;

    var filePath = path.join(uploadPath + date, filename);
   

  

    mkdirp(uploadPath, function (err) {
        request(url).pipe(fs.createWriteStream(filePath));

        callback(null, fileUrl);
    });


}




