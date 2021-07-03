var express = require('express');
const g_module = require('../module/module_function')
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

router.get('/calculation',function (req,res,next) {

});

router.post('/calculation',function (req,res,next) {

});

router.put('/calculation',function (req,res,next) {

});

router.delete('/calculation',function (req,res,next) {

});

module.exports = router;
