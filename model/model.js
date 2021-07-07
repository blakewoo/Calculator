const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    expression: String,
    result : String
});
module.exports = mongoose.model('result', userSchema);