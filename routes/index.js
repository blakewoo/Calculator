var express = require('express');
const g_module = require('../module/module_function')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/calculate',function (req,res,next) {
  res.send(g_module.calculate(req.body.data));
});

router.delete('/deleteResult',function (req,res,next) {

});

router.put('/updateResult',function (req,res,next) {

});

module.exports = router;
