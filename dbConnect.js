const mongoose = require('mongoose');
const config = require('./config.js')
module.exports = () => {
    function connect() {
        mongoose.connect(config.url, function(err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./model/model.js');
};

