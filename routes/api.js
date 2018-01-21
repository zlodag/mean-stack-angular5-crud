var express = require('express');
var router = express.Router();
var routerFactory = require('./routerFactory.js');

var Region = require('../models/Region.js');
var Category = require('../models/Category.js');
var Section = require('../models/Section.js');
var Item = require('../models/Item.js');

router.use('/regions', routerFactory(Region));
router.use('/categories', routerFactory(Category));
router.use('/sections', routerFactory(Section));
// var itemRouter = routerFactory(Item);
// itemRouter.put('/:id/introduction', function(req, res, next) {
//     // console.log('ID was ' + req.params.id);
//     let introduction = req.body;
    
//     Item.findById(req.params.id), {introduction: req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
router.use('/items', routerFactory(Item));
router.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(500).end();
});
module.exports = router;