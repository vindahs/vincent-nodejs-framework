var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});


router.get('/post-project', function(req, res, next) {
    res.render('post-project', { title: 'Express' });
});

router.get('/freelance-services', function(req, res, next) {
    res.render('freelance-services', { title: 'Express' });
});

router.get('/freelance-jobs', function(req, res, next) {
    res.render('freelance-jobs', { title: 'Express' });
});

router.get('/freelancers', function(req, res, next) {
    res.render('freelancers', { title: 'Express' });
});

router.get('/checkout', function(req, res, next) {
    res.render('checkout', { title: 'Express' });
});


router.get('/mintme', function(req, res, next) {
    res.render('mintme', { title: 'Express' });
});


module.exports = router;
