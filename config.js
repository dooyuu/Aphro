var path = require('path');

var config = {

    name: 'Aphro',
    description: 'amuse yourself',

    db: 'mongodb://127.0.0.1/aphro_dev',
    db_name: 'aphro_dev',
    port: 3000,

    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/upload/'
    }
};

module.exports = config;
