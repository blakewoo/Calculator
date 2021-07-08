const DB = require('../model/model')


exports.insertData = function (req,callback) {
    let name = req.body.Data.name;
    let expression = req.body.Data.expression;
    let result = req.body.Data.result;
    DB.create({name:name,expression:expression,result:result},function (err,result){
        console.log(result);
        if(err) return callback(false)
        return callback(true);
    });
}

exports.readData = function (req,callback) {
    DB.find({},function (err,find_result){
        if(err) return callback([])
        return callback(find_result);
    })
}

exports.updateData = function (req,callback) {
    let id = req.body.id;
    let name = req.body.name;
    let expression = req.body.expression;
    let result = req.body.result;
    DB.updateOne({_id:id},{name:name,expression:expression,result:result},function (err,find_result){
        if(err) return callback(false)
        return callback(true);
    })
}

exports.deleteData = function (req,callback) {
    let id = req.body.id;
    DB.deleteOne({_id:id},function (err,find_result){
        if(err) return callback(false)
        return callback(true);
    })
}