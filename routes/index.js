var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Post User Login */
router.post('/login', function(req, res, next) {
    console.log(req.body.password);
    console.log(req.body.email);
    var username = req.body.email;
    var password = req.body.password;
    if ((username != '') && (password != '')) {
        res.redirect('/dashboard');
    } else {
        res.redirect('/');
    }

});

module.exports = router;
