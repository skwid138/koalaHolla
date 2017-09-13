// Requires
var express = require('express');
var path = require('path');

// Makes this a router
var router = express.Router();

//base url
router.get('/', function (req, res) { // change this to router
    res.sendFile(path.resolve('public/views/index.html'));
}); // end base

// export
module.exports = router;