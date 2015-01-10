var path = require('path');

var config = {
    "name": "Aphro",
    "description": "amuse yourself",
    "db": "mongodb://127.0.0.1/aphro_dev",
    "db_name": "aphro_dev",
    "port": 3000,
    "page_start": 60,
    "upload": {
        "path": "/Users/dongyu/www/Aphro/public/upload/",
        "url": "/upload/"
    },
    "pre_page": 30
};

module.exports = config;