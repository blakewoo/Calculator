var express = require('express');
const g_module = require('../module/module_function')
const db_module = require('../module/db_functions')

var router = express.Router();

/* GET home page. */
/**
 *
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/calculation/module',function (req,res,next) {
  res.send(g_module.calculate(req.body.Data));
});

// 연산 결과들 불러오기
router.get('/calculation',function (req,res,next) {

});

// 연산 결과 DB에 넣기
router.post('/calculation',function (req,res,next) {

});

// 연산 결과 변경하기
router.put('/calculation',function (req,res,next) {

});

// 연산 결과 삭제하기
router.delete('/calculation',function (req,res,next) {

});

module.exports = router;
