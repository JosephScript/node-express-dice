var express = require('express');
var router = express.Router();
var dice = require('../libs/dice');

router.post('/', function (req, res, next) {
    res.json({result: dice.roll(req.body.dice)});
});

module.exports = router;
