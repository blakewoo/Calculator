var express = require('express');
const g_module = require('../module/module_function')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/calculate',function (req,res,next) {

});

module.exports = router;
