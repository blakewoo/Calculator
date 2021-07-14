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

exports.readData = async function (req,callback) {
    try {
        let index = req.cookies.index;
        let totalDocumentCount = await DB.count();
        let partDocumnet = await DB.find({}).skip(index*8).limit(8);
        return callback({count:totalDocumentCount,document:partDocumnet})
    }
    catch(e) {
        return callback({count:0,document:[]})
    }
}

exports.updateData = function (req,callback) {
    let id = req.body.Data.id;
    let name = req.body.Data.name;
    console.log(req.body)
    DB.updateOne({_id:id},{$set:{name:name}},function (err,find_result){
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