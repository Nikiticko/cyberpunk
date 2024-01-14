var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Judy', function(req, res, next) {
  res.send("<h1>Страница Judy</h1>");
});
router.get('/Johnny', function(req, res, next) {
  res.send("<h1>Страница Johnny</h1>");
});
router.get('/Panam', function(req, res, next) {
  res.send("<h1>Страница Panam</h1>");
});
module.exports = router;
