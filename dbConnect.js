const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        // mongoose.connect('topadmin:wpqkfqhdks@127.0.0.1:19507/admin', { dbName: 'calculationLog' }, function(err) {

            mongoose.connect('127.0.0.1:27017/admin', { dbName: 'calculationLog' }, function(err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
};